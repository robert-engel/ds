import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {AutoCatapultVillageGroup} from '../../../service/catapult/structure/auto-catapult-village-group';
import {CatapultService} from '../../../service/catapult/catapult.service';
import {BuildingTask} from '../../../service/auto-builder/structure/building-task';
import {CatapultGroupAddComponent} from '../catapult-group-add/catapult-group-add.component';
import {CatapultGroupEditComponent} from '../catapult-group-edit/catapult-group-edit.component';

@Component({
  selector: 'app-catapult-home',
  templateUrl: './catapult-home.component.html',
  styleUrls: ['./catapult-home.component.css']
})
export class CatapultHomeComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  groups: AutoCatapultVillageGroup[];
  reductions: BuildingTask[];
  slide = new FormControl();

  slides: { [id: number]: FormControl } = {};

  displayedColumns = ['toggle', 'range', 'amount', 'villages', 'control'];

  constructor(
    private catapult: CatapultService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.catapult.getConfig(this.unsub$).subscribe(config => {
      this.slide.setValue(config.enabled, {emitEvent: false});
      this.reductions = config.reductions;
      this.groups = [];
      for (const id of Object.keys(config.entities)) {
        this.groups.push(config.entities[id]);
      }
      for (const group of this.groups) {
        this.slides[group.id] = new FormControl(group.enabled);
        this.slides[group.id].valueChanges.subscribe(enabled => {
          this.catapult.editGroup(
            group.id,
            enabled,
            group.range,
            group.amount,
            group.coordinateX,
            group.coordinateY
          );
        });
      }
    });
    this.catapult.groupDeletedEvent(this.unsub$).subscribe(id => {
      this.groups = this.groups.filter(group => {
        return group.id !== id;
      });
    });
    this.slide.valueChanges.subscribe(value => {
      this.catapult.setEnabled(value);
    });
  }

  add(): void {
    this.dialog.open(CatapultGroupAddComponent, {minWidth: '60%'}).afterClosed().subscribe(entity => {
      if (entity !== undefined) {
        this.groups = [
          ...this.groups,
          entity
        ];
        this.slides[entity.id] = new FormControl(entity.enabled);
        this.slides[entity.id].valueChanges.subscribe(enabled => {
          this.catapult.editGroup(
            entity.id,
            enabled,
            entity.range,
            entity.amount,
            entity.coordinateX,
            entity.coordinateY
          );
        });
        this.dialog.open(CatapultGroupEditComponent, {
          data: entity,
          minWidth: '60%'
        });
      }
    });
  }

  delete(id: number): void {
    this.catapult.deleteGroup(id);
  }

  edit(task: AutoCatapultVillageGroup): void {
    this.dialog.open(CatapultGroupEditComponent, {
      data: task,
      minWidth: '60%'
    }).afterClosed().subscribe(entity => {
      if (entity !== undefined) {
        this.groups = this.groups.map(mapTask => {
          return mapTask.id === task.id ? entity : mapTask;
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

}

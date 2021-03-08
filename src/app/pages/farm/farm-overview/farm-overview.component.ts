import {Component, OnDestroy, OnInit} from '@angular/core';
import {FarmTaskEntity} from '../../../service/farm/structures/farm-task-entity';
import {FarmService} from '../../../service/farm/farm.service';
import {Subject} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {FarmTaskAddComponent} from '../farm-task-add/farm-task-add.component';
import {FarmTaskEditComponent} from '../farm-task-edit/farm-task-edit.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-farm-overview',
  templateUrl: './farm-overview.component.html',
  styleUrls: ['./farm-overview.component.css']
})
export class FarmOverviewComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  tasks: FarmTaskEntity[];
  slide = new FormControl();
  max = new FormControl();

  slides: { [id: number]: FormControl } = {};

  displayedColumns = ['toggle', 'interval', 'maxDistance', 'villages', 'units', 'control'];

  constructor(
    private farm: FarmService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.farm.list(this.unsub$).subscribe(tasks => {
      this.tasks = tasks;
      for (const task of tasks) {
        this.slides[task.id] = new FormControl(task.enabled);
        this.slides[task.id].valueChanges.subscribe(enabled => {
          this.farm.setTaskEnabled(task.id, enabled).subscribe();
        });
      }
    });
    this.farm.config(this.unsub$).subscribe(config => {
      this.slide.setValue(config.enabled, {emitEvent: false});
      this.max.setValue(config.maxIncsPerVillage, {emitEvent: false});
    });
    this.slide.valueChanges.subscribe(value => {
      this.farm.setEnabled(value);
    });
    this.max.valueChanges.subscribe(max => {
      this.farm.setMaxIncs(max);
    });
  }

  add(): void {
    this.dialog.open(FarmTaskAddComponent).afterClosed().subscribe(entity => {
      if (entity !== undefined) {
        this.tasks = [
          ...this.tasks,
          entity
        ];
        this.slides[entity.id] = new FormControl(entity.enabled);
        this.slides[entity.id].valueChanges.subscribe(enabled => {
          this.farm.setTaskEnabled(entity.id, enabled).subscribe();
        });
        this.dialog.open(FarmTaskEditComponent, {
          data: entity,
        });
      }
    });
  }

  delete(id: number): void {
    this.farm.deleteEntity(id).subscribe(remove => {
      this.tasks = this.tasks.filter(value => {
        return value.id !== remove;
      });
    });
  }

  edit(task: FarmTaskEntity): void {
    this.dialog.open(FarmTaskEditComponent, {
      data: task
    }).afterClosed().subscribe(entity => {
      if (entity !== undefined) {
        this.tasks = this.tasks.map(mapTask => {
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

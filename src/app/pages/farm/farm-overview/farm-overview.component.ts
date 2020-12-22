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

  constructor(
    private farm: FarmService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.farm.list(this.unsub$).subscribe(tasks => {
      this.tasks = tasks;
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
        this.tasks.push(entity);
        this.dialog.open(FarmTaskEditComponent, {
          data: entity,
        });
      }
    });
  }

  delete(id: number): void {
    this.tasks = this.tasks.filter(value => {
      return value.id !== id;
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

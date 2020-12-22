import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FarmTaskEntity} from '../../../service/farm/structures/farm-task-entity';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {FarmTaskEditComponent} from '../farm-task-edit/farm-task-edit.component';
import {FarmService} from '../../../service/farm/farm.service';

@Component({
  selector: 'app-farm-task',
  templateUrl: './farm-task.component.html',
  styleUrls: ['./farm-task.component.css']
})
export class FarmTaskComponent implements OnInit {

  internalTask: FarmTaskEntity;
  nonFarmUnits = ['militia', 'ram', 'catapult', 'snob'];

  @Input()
  set task(task: FarmTaskEntity) {
    this.internalTask = task;
    this.slide.setValue(this.internalTask.enabled, {emitEvent: false});
  }

  @Output()
  delete = new EventEmitter<number>();

  slide = new FormControl();

  constructor(
    private dialog: MatDialog,
    private farm: FarmService,
  ) {
  }

  ngOnInit(): void {
    this.slide.valueChanges.subscribe(value => {
      this.farm.setTaskEnabled(this.internalTask.id, value).subscribe();
    });
  }

  remove(): void {
    this.farm.deleteEntity(this.internalTask.id).subscribe(id => {
      this.delete.emit(id);
    });
  }

  edit(): void {
    this.dialog.open(FarmTaskEditComponent, {
      data: this.internalTask
    }).afterClosed().subscribe(entity => {
      if (entity !== undefined) {
        this.task = entity;
      }
    });
  }
}

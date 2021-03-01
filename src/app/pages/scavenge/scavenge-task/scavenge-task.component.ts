import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FarmTaskEditComponent} from '../../farm/farm-task-edit/farm-task-edit.component';
import {Subject} from 'rxjs';
import {ScavengeTask} from '../../../service/scavenge/structures/scavenge-task';
import {ScavengeService} from '../../../service/scavenge/scavenge.service';
import {ScavengeTaskEditComponent} from '../scavenge-task-edit/scavenge-task-edit.component';

@Component({
  selector: 'app-scavenge-task',
  templateUrl: './scavenge-task.component.html',
  styleUrls: ['./scavenge-task.component.css']
})
export class ScavengeTaskComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  internalTask: ScavengeTask;
  nonFarmUnits = ['militia', 'ram', 'catapult', 'snob', 'spy'];

  @Input()
  set task(task: ScavengeTask) {
    this.internalTask = task;
  }

  constructor(
    private dialog: MatDialog,
    private scavenge: ScavengeService,
  ) {
  }

  ngOnInit(): void {
    this.scavenge.taskEditEvent(this.unsub$).subscribe(task => {
      if (task.id === this.internalTask.id) {
        this.task = task;
      }
    });
  }

  remove(): void {
    this.scavenge.removeTask(this.internalTask.id);
  }

  edit(): void {
    this.dialog.open(ScavengeTaskEditComponent, {
      data: this.internalTask
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

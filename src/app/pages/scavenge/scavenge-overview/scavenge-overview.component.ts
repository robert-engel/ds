import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ScavengeTask} from '../../../service/scavenge/structures/scavenge-task';
import {ScavengeService} from '../../../service/scavenge/scavenge.service';
import {ScavengeTaskEditComponent} from '../scavenge-task-edit/scavenge-task-edit.component';
import {ScavengeTaskAddComponent} from '../scavenge-task-add/scavenge-task-add.component';

@Component({
  selector: 'app-scavenge-overview',
  templateUrl: './scavenge-overview.component.html',
  styleUrls: ['./scavenge-overview.component.css']
})
export class ScavengeOverviewComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  tasks: ScavengeTask[];
  slide = new FormControl();

  dialogRef: MatDialogRef<any> = undefined;

  constructor(
    private scavenge: ScavengeService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.scavenge.listTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
    this.scavenge.enableEvent(this.unsub$).subscribe(enabled => {
      this.slide.setValue(enabled, {emitEvent: false});
    });
    this.slide.valueChanges.subscribe(value => {
      this.scavenge.setEnabled(value);
    });
    this.scavenge.taskEditEvent(this.unsub$).subscribe(task => {
      this.tasks = this.tasks.map(tsk => {
        return tsk.id === task.id ? task : tsk;
      });
    });
    this.scavenge.taskAddedEvent(this.unsub$).subscribe(task => {
      if (this.dialogRef !== undefined) {
        this.dialogRef.close();
        this.tasks = [
          ...this.tasks,
          task
        ];
        this.dialog.open(ScavengeTaskEditComponent, {
          data: task,
        });
      }
    });
    this.scavenge.taskRemovedEvent(this.unsub$).subscribe(id => {
      this.tasks = this.tasks.filter(value => {
        return value.id !== id;
      });
    });
  }

  add(): void {
    this.dialogRef = this.dialog.open(ScavengeTaskAddComponent);
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

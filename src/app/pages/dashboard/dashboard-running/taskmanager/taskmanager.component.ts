import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subject} from 'rxjs';
import {Task} from '../../../../service/structures/task';
import {TaskmanagerService} from '../../../../service/taskmanager/taskmanager.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();
  displayedColumns: string[] = ['name', 'nextExecution', 'remainingDelay'];

  tasks: Task[] = [];

  constructor(private taskManagerService: TaskmanagerService) {
  }

  ngOnInit(): void {
    this.taskManagerService.allTasks().pipe(takeUntil(this.unsub$)).subscribe(tasks => {
      this.tasks = tasks.tasks;
    });
    this.taskManagerService.addTask().pipe(takeUntil(this.unsub$)).subscribe(task => {
      this.tasks = [...this.tasks, task];
      this.tasks.sort((a, b) => {
        return a.remainingDelay < b.remainingDelay ? -1 : 1;
      });
    });
    this.taskManagerService.cancelTask().pipe(takeUntil(this.unsub$)).subscribe(task => {
      this.tasks = this.tasks.filter((item, idx) => {
        return item.id !== task.id;
      });
    });
    this.taskManagerService.finishTask().pipe(takeUntil(this.unsub$)).subscribe(task => {
      this.tasks = this.tasks.filter((item, idx) => {
        return item.id !== task.id;
      });
    });
    interval(1000).pipe(takeUntil(this.unsub$)).subscribe(num => {
      this.tasks.forEach((task, index, arr) => {
        arr[index].remainingDelay -= 1;
      });
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

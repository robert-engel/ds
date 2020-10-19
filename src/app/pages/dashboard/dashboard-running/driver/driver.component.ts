import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations';
import {Subject} from 'rxjs';
import {InternalJob} from '../../../../service/structures/internal-job';
import {DrivermanagerService} from '../../../../service/drivermanager/drivermanager.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
  animations: [
    trigger('actionAnimation', [
      state(
        'yes',
        style({
          'background-color': '#9c27b0',
        }),
      ),
      state(
        'no',
        style({
          opacity: 0.9,
        }),
      ),
      transition('* => *', animate('500ms ease-in-out')),
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        // each time the binding value changes
        query(':leave', [stagger(500, [animate('0.5s', style({opacity: 0}))])], {
          optional: true,
        }),
        query(
          ':enter',
          [
            style({opacity: 0}),
            stagger(500, [animate('0.5s', style({opacity: 1}))]),
          ],
          {optional: true},
        ),
      ]),
    ]),
  ],
})
export class DriverComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  currentJob: InternalJob;
  jobs: InternalJob[] = [];

  constructor(private driverService: DrivermanagerService) {
  }

  ngOnInit(): void {
    this.refreshJobs();
    this.driverService.addJob().pipe(takeUntil(this.unsub$)).subscribe(task => {
      this.jobs.push(task);
      this.jobs.sort(this.compareJobs);
    });
    this.driverService.finishJob().pipe(takeUntil(this.unsub$)).subscribe(task => {
      this.currentJob = undefined;
    });
    this.driverService.startJob().pipe(takeUntil(this.unsub$)).subscribe(task => {
      this.currentJob = task;
      this.jobs = this.jobs.filter((item, idx) => {
        return item.id !== task.id;
      });
    });
  }

  refreshJobs(): void {
    this.driverService.currentJob().pipe(takeUntil(this.unsub$)).subscribe(task => {
      if (task !== undefined && task !== null) {
        task.running = true;
        this.currentJob = task;
      }
    });
    this.driverService.allJobs().pipe(takeUntil(this.unsub$)).subscribe(tasks => {
      this.jobs = tasks.jobs;
    });
  }

  compareJobs(a: InternalJob, b: InternalJob): number {
    if (a.running) {
      return -1;
    }
    if (b.running) {
      return 1;
    }
    if (a.priority === b.priority) {
      return a.id < b.id ? -1 : 1;
    }
    return a.priority < b.priority ? -1 : 1;
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

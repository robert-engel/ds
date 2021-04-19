import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {AutoRecruitService} from '../../../service/auto-recruit/auto-recruit.service';
import {Subject} from 'rxjs';
import {AutoRecruitTask} from '../../../service/auto-recruit/structures/auto-recruit-task';

@Component({
  selector: 'app-auto-recruit-overview',
  templateUrl: './auto-recruit-overview.component.html',
  styleUrls: ['./auto-recruit-overview.component.css']
})
export class AutoRecruitOverviewComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  slide = new FormControl(false);

  form = this.fb.group({
    group: [],
    units: [],
  });

  tasks: AutoRecruitTask[];

  displayedColumns = ['group', 'units', 'delete'];

  constructor(
    private fb: FormBuilder,
    private recruiter: AutoRecruitService,
  ) {
  }

  ngOnInit(): void {
    this.recruiter.getConfig(this.unsub$).subscribe(config => {
      const arr = [];
      for (const key of Object.keys(config.entities)) {
        arr.push(config.entities[key]);
      }
      this.tasks = arr;
      this.slide.setValue(config.enabled, {emitEvent: false});
    });
    this.recruiter.addEvent(this.unsub$).subscribe(task => {
      this.tasks = [
        ...this.tasks,
        task
      ];
    });
    this.recruiter.removeEvent(this.unsub$).subscribe(id => {
      this.tasks = this.tasks.filter(task => {
        return task.id !== id;
      });
    });
    this.slide.valueChanges.subscribe(value => {
      this.recruiter.setEnabled(value);
    });
  }

  add(): void {
    this.recruiter.addTask(
      this.form.value.group,
      this.form.value.units,
    );
  }

  delete(id: number): void {
    this.recruiter.removeTask(id);
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

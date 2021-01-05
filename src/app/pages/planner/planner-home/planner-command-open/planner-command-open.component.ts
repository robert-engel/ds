import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import * as moment from 'moment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-planner-command-open',
  templateUrl: './planner-command-open.component.html',
  styleUrls: ['./planner-command-open.component.css']
})
export class PlannerCommandOpenComponent implements OnInit {

  form = this.fb.group({
    target: [null],
    date: moment(),
    time: moment().format('HH:mm:ss:SSS'),
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.form.get('date').valueChanges.subscribe(date => {
      sessionStorage.setItem('tw.interface.planner.command.date', date.valueOf());
    });
    this.form.get('time').valueChanges.subscribe(time => {
      sessionStorage.setItem('tw.interface.planner.command.time', time);
    });
    this.form.get('target').valueChanges.subscribe(target => {
      if (this.form.get('target').valid) {
        localStorage.setItem('tw.interface.planner.command.target', JSON.stringify(target));
      }
    });
    const localDate = sessionStorage.getItem('tw.interface.planner.command.date');
    if (localDate !== null) {
      this.form.get('date').setValue(moment(parseInt(localDate, 10)));
    }
    const localTime = sessionStorage.getItem('tw.interface.planner.command.time');
    if (localTime !== null) {
      this.form.get('time').setValue(localTime);
    }
    const localTarget = localStorage.getItem('tw.interface.planner.command.target');
    if (localTarget !== null) {
      this.form.get('target').setValue(JSON.parse(localTarget));
    }
  }

  submit(data): void {
    const time = moment(data.date.format('DD.MM.YYYY') + ' ' + data.time, 'DD.MM.YYYY HH:mm:ss:SSS');
    this.router.navigate(['/planner/command', data.target.id, time.valueOf()]);
  }

}

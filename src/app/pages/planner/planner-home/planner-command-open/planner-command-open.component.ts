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
  }

  submit(data): void {
    const time = moment(data.date.format('DD.MM.YYYY') + ' ' + data.time, 'DD.MM.YYYY HH:mm:ss:SSS');
    this.router.navigate(['/planner/command', data.target.id, time.valueOf()]);
  }

}

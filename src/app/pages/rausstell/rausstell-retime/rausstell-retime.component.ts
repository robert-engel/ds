import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import * as moment from 'moment';
import {timer} from 'rxjs';
import {RausstellManagerService} from '../../../service/rausstellmanager/rausstell-manager.service';

@Component({
  selector: 'app-rausstell-retime',
  templateUrl: './rausstell-retime.component.html',
  styleUrls: ['./rausstell-retime.component.css']
})
export class RausstellRetimeComponent implements OnInit {

  form = this.fb.group({
    village: [null],
    units: {},
    date: moment(),
    time: moment().format('HH:mm:ss:SSS'),
  });

  constructor(
    private fb: FormBuilder,
    private raus: RausstellManagerService,
  ) {
  }

  ngOnInit(): void {
  }

  submit(data): void {
    this.form.disable();
    timer(1500).subscribe(() => {
      this.form.enable();
    });
    if (data.units === null) {
      return;
    }
    const time = moment(data.date.format('DD.MM.YYYY') + ' ' + data.time, 'DD.MM.YYYY HH:mm:ss:SSS');
    this.raus.antiRetime(time.valueOf(), data.village.id, data.units);
  }

}

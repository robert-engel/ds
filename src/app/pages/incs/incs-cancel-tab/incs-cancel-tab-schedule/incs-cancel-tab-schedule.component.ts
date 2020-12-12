import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {FormBuilder} from '@angular/forms';
import {CommandService} from '../../../../service/command/command.service';
import {ActivatedRoute} from '@angular/router';
import {VillageService} from '../../../../service/village/village.service';
import {timer} from 'rxjs';

@Component({
  selector: 'app-incs-cancel-tab-schedule',
  templateUrl: './incs-cancel-tab-schedule.component.html',
  styleUrls: ['./incs-cancel-tab-schedule.component.css']
})
export class IncsCancelTabScheduleComponent implements OnInit {

  form = this.fb.group({
    village: [null],
    troops: {},
    date: moment(),
    time: moment().format('HH:mm:ss'),
    start: 0,
    end: 999,
  });

  constructor(
    private fb: FormBuilder,
    private commandService: CommandService,
    private route: ActivatedRoute,
    private villageService: VillageService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.has('village')) {
        this.villageService.byId(parseInt(params.get('village'), 10)).subscribe(pVillage => {
          this.form.patchValue({
            village: pVillage,
          });
        });
      }
      if (params.has('time')) {
        this.form.patchValue({
          date: moment(parseInt(params.get('time'), 10)),
          time: moment(parseInt(params.get('time'), 10)).format('HH:mm:ss'),
        });
      }
    });
  }

  submit(data): void {
    this.form.disable();
    timer(1500).subscribe(() => {
      this.form.enable();
    });
    if (data.troops === null) {
      return;
    }
    const time = moment(data.date.format('DD.MM.YYYY') + ' ' + data.time, 'DD.MM.YYYY HH:mm:ss');
    this.commandService.cancelTab(
      data.village.id,
      data.troops,
      time.valueOf(),
      data.start,
      data.end,
    );
  }

}

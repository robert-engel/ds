import {Component, OnDestroy, OnInit} from '@angular/core';
import {FarmService} from '../../../service/farm/farm.service';
import {FarmCollectorEntry} from '../../../service/farm/structures/farm-collector-entry';
import {Subject} from 'rxjs';
import {FormBuilder, Validators} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-farm-settings',
  templateUrl: './farm-settings.component.html',
  styleUrls: ['./farm-settings.component.css']
})
export class FarmSettingsComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();
  displayedColumns: string[] = ['village', 'time', 'delete'];

  collectors: FarmCollectorEntry[];

  form = this.fb.group({
    village: null,
    date: moment(),
    time: [moment().format('HH:mm:ss'), Validators.pattern('^\\d{2}:\\d{2}:\\d{2}$')],
  });

  constructor(
    private farm: FarmService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.farm.collectors(this.unsub$).subscribe(collectors => {
      this.collectors = collectors;
    });
    this.farm.collectorAddEvent(this.unsub$).subscribe(entry => {
      this.collectors = [
        ...this.collectors,
        entry
      ];
    });
    this.farm.collectorClearEvent(this.unsub$).subscribe(village => {
      this.collectors = this.collectors.filter(value => {
        return value.village.id !== village.id;
      });
    });
  }

  add(data): void {
    const time = moment(data.date.format('DD.MM.YYYY') + ' ' + data.time, 'DD.MM.YYYY HH:mm:ss');
    this.farm.collectorAdd(data.village.id, time.valueOf());
  }

  clear(entry: FarmCollectorEntry): void {
    this.farm.collectorClear(entry.village.id);
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

}

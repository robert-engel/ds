import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {CommandType} from '../../../service/structures/command-type';

import * as moment from 'moment';
import {StandardTroopTemplate} from '../../../service/structures/standard-troop-template';
import {CommandService} from '../../../service/command/command.service';
import {WebsocketService} from '../../../service/websocket.service';
import {Subject, timer} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {VillageService} from '../../../service/village/village.service';

@Component({
  selector: 'app-command-schedule',
  templateUrl: './command-schedule.component.html',
  styleUrls: ['./command-schedule.component.css']
})
export class CommandScheduleComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  form = this.fb.group({
    from: [null],
    to: [null],
    units: {},
    template: [null, Validators.required],
    unit: ['ram', Validators.required],
    commandType: CommandType.ATTACK,
    date: moment(),
    time: moment().format('HH:mm:ss:SSS'),
  });
  templates: StandardTroopTemplate[];
  units: string[];
  disabled = false;
  loading = false;

  timerForm = new FormControl();
  timerLogics: string[];

  constructor(
    private fb: FormBuilder,
    private commandService: CommandService,
    private web: WebsocketService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private villageService: VillageService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.has('source')) {
        let ids = JSON.parse(params.get('source'));
        if (Array.isArray(ids) === false) {
          ids = [ids];
        }
        if (ids.length === 1) {
          this.villageService
          .byId(parseInt(ids[0], 10))
          .subscribe(village => {
            this.form.patchValue({
              from: village,
            });
          });
        } else {
          this.form.patchValue({
            from: ids,
          });
        }
      }
      if (params.has('target')) {
        this.villageService
        .byId(parseInt(params.get('target'), 10))
        .subscribe(village => {
          this.form.patchValue({
            to: village,
          });
        });
      }
      if (params.has('unit')) {
        this.form.patchValue({
          unit: params.get('unit'),
        });
      }
      if (params.has('type')) {
        this.form.patchValue({
          commandType: params.get('type'),
        });
      }
      if (params.has('time')) {
        this.form.patchValue({
          date: moment(parseInt(params.get('time'), 10)),
          time: moment(parseInt(params.get('time'), 10)).format('HH:mm:ss:SSS'),
        });
      }
    });
    this.commandService.getTroopTemplates().subscribe(templates => {
      this.templates = templates;
    });
    this.web.infoObservable.subscribe(info => {
      this.units = info.units;
    });
    this.commandService.addCommandEvents().pipe(takeUntil(this.unsub$)).subscribe(command => {
      this.toastr.success(
        `Von ${command.from.search} nach ${command.to.search}. Ankunft: ${command.arrivalTime}`,
        command.commandType,
        {
          timeOut: 7000,
        }
      );
    });
    this.commandService.getTimerLogic().pipe(takeUntil(this.unsub$)).subscribe(resp => {
      this.timerLogics = resp.available;
      this.timerForm.setValue(resp.timerLogic, {emitEvent: false});
    });
    this.timerForm.valueChanges.subscribe(value => {
      this.commandService.setTimerLogic(value);
    });
  }

  get multiSource(): boolean {
    return Array.isArray(this.form.value.from);
  }

  submit(data): void {
    this.disabled = true;
    timer(1500).subscribe(() => {
      this.disabled = false;
    });
    if (data.template === -1 && data.units === null) {
      return;
    }
    const time = moment(data.date.format('DD.MM.YYYY') + ' ' + data.time, 'DD.MM.YYYY HH:mm:ss:SSS');
    if (Array.isArray(data.from) === false) {
      this.commandService.addCommand(
        data.from.id,
        data.to.id,
        data.unit,
        data.commandType,
        time.valueOf(),
        data.template === 'custom' ? undefined : data.template,
        data.template === 'custom' ? data.units : undefined,
      );
    } else {
      data.from.forEach(id => {
        this.commandService.addCommand(
          id,
          data.to.id,
          data.unit,
          data.commandType,
          time.valueOf(),
          data.template === 'custom' ? undefined : data.template,
          data.template === 'custom' ? data.units : undefined,
        );
      });
    }
  }

  tooltip(logic: string): string | undefined {
    switch (logic) {
      case 'HTTP':
        return 'Kann verwendet werden um Trains zu schicken.';
    }
    return undefined;
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

}

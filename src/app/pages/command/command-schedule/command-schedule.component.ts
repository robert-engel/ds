import {Component, Inject, OnDestroy, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {CommandType} from '../../../service/structures/command-type';

import * as moment from 'moment';
import {StandardTroopTemplate} from '../../../service/structures/standard-troop-template';
import {CommandService} from '../../../service/command/command.service';
import {WebsocketService} from '../../../service/websocket.service';
import {Subject, timer} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {takeUntil} from 'rxjs/operators';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ScheduleData} from '../../../service/command/structures/schedule-data';

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
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ScheduleData | undefined,
    private fb: FormBuilder,
    private commandService: CommandService,
    private web: WebsocketService,
    private toastr: ToastrService,
  ) {
    if (data) {
      if (data.sources.length === 1) {
        this.form.get('from').setValue(data.sources[0]);
      } else {
        this.form.get('from').setValue(data.sources.map(value => value.id));
      }
      this.form.patchValue({
        to: data.target,
        unit: data.unit,
        commandType: data.type,
        date: moment(data.time),
        time: moment(data.time).format('HH:mm:ss:SSS'),
      });
    }
  }

  ngOnInit(): void {
    this.commandService.getTroopTemplates().subscribe(templates => {
      this.templates = templates;
    });
    this.web.infoObservable.subscribe(info => {
      this.units = info.units;
    });
    this.commandService.addCommandEvents().pipe(takeUntil(this.unsub$)).subscribe(command => {
      this.toastr.success(
        `Von ${command.from.search} nach ${command.to.search}. Ankunft: ${command.arrivalTime.display}`,
        command.commandType,
        {
          timeOut: 7000,
        }
      );
    });
    this.commandService.multiAddCommandEvents().pipe(takeUntil(this.unsub$)).subscribe(response => {
      if (response.success > 0) {
        this.toastr.success(
          `${response.success} Befehle wurden hinzugefügt.`,
          'Scheduled',
          {
            timeOut: 7000,
          }
        );
      }
      if (response.failed > 0) {
        this.toastr.error(
          `${response.failed} Befehle konnten nicht hinzugefügt werden.`,
          'Fehler',
          {
            timeOut: 7000,
          }
        );
      }
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
      this.commandService.addCommands(
        data.from,
        data.to.id,
        data.unit,
        data.commandType,
        time.valueOf(),
        data.template === 'custom' ? undefined : data.template,
        data.template === 'custom' ? data.units : undefined,
      );
    }
  }

  tooltip(logic: string): string | undefined {
    switch (logic) {
      case 'HTTP':
        return 'Kann Befehle mit Pflichtabstand schicken.';
    }
    return undefined;
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

}

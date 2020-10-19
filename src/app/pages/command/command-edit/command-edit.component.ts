import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {StandardTroopTemplate} from '../../../service/structures/standard-troop-template';
import {WebsocketService} from '../../../service/websocket.service';
import {CommandService} from '../../../service/command/command.service';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-command-edit',
  templateUrl: './command-edit.component.html',
  styleUrls: ['./command-edit.component.css']
})
export class CommandEditComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  title: string;
  taskId: number;

  fromForm: FormControl = new FormControl('');
  toForm: FormControl = new FormControl('');
  unitsForm: FormControl = new FormControl();
  templateForm: FormControl = new FormControl();
  unitForm: FormControl = new FormControl('', Validators.required);
  commandTypeForm: FormControl = new FormControl();
  sendDateTimeForm: FormGroup = this.fb.group({
    date: moment(),
    time: moment().format('HH:mm:ss:SSS'),
  });
  arrivalDateTimeForm: FormGroup = this.fb.group({
    date: moment(),
    time: moment().format('HH:mm:ss:SSS'),
  });

  templates: StandardTroopTemplate[];

  units: string[];

  disabled = false;

  constructor(
    private fb: FormBuilder,
    private web: WebsocketService,
    private command: CommandService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.web.infoObservable.subscribe(info => {
      this.units = info.units;
    });
    this.command.getTroopTemplates().subscribe(templates => {
      this.templates = templates;
    });
    this.command.getEditTask().pipe(takeUntil(this.unsub$)).subscribe(task => {
      if (!task) {
        this.router.navigate(['/command']);
        return;
      }
      this.taskId = task.id;
      this.title = `Bearbeiten von Task ${task.commandType} ${task.sendTime}`;
      this.fromForm.setValue(task.from);
      this.toForm.setValue(task.to);
      this.unitsForm.setValue(task.units);
      this.unitForm.setValue(task.unit);
      this.templateForm.setValue('custom');
      this.commandTypeForm.setValue(task.commandType);
      this.command.getEditTimes(task.id).subscribe(timings => {
        this.sendDateTimeForm.setValue({
          date: moment(timings.sendTime),
          time: moment(timings.sendTime).format('HH:mm:ss:SSS'),
        });
        this.arrivalDateTimeForm.setValue({
          date: moment(timings.arrivalTime),
          time: moment(timings.arrivalTime).format('HH:mm:ss:SSS'),
        });
      });
    });
    this.command.editCommandsEvents().pipe(takeUntil(this.unsub$)).subscribe(command => {
      this.toastr.success(
        `Erfolgreich bearbeitet.`,
        undefined,
        {
          timeOut: 7000,
        }
      );
    });
    this.route.params.pipe(takeUntil(this.unsub$)).subscribe(params => {
      // TODO
    });
  }

  updateFrom(data): void {
    this.disabled = true;
    setTimeout(() => this.disabled = false, 1500);
    this.command.editSource(this.taskId, data.id);
  }

  updateTo(data): void {
    this.disabled = true;
    setTimeout(() => this.disabled = false, 1500);
    this.command.editTarget(this.taskId, data.id);
  }

  updateUnits(template, units): void {
    this.disabled = true;
    setTimeout(() => this.disabled = false, 1500);
    this.command.editTroops(
      this.taskId,
      template === 'custom' ? undefined : template,
      template === 'custom' ? units : undefined,
    );
  }

  updateUnit(data): void {
    this.disabled = true;
    setTimeout(() => this.disabled = false, 1500);
    this.command.editSlowestUnit(this.taskId, data);
  }

  updateCommandType(data): void {
    this.disabled = true;
    setTimeout(() => this.disabled = false, 1500);
    this.command.editCommandType(this.taskId, data);
  }

  updateArrivalTime(data): void {
    const time = moment(data.date.format('DD.MM.YYYY') + ' ' + data.time, 'DD.MM.YYYY HH:mm:ss:SSS');
    this.disabled = true;
    setTimeout(() => this.disabled = false, 1500);
    this.command.editArrival(this.taskId, time.valueOf());
  }

  updateSendTime(data): void {
    this.disabled = true;
    const time = moment(data.date.format('DD.MM.YYYY') + ' ' + data.time, 'DD.MM.YYYY HH:mm:ss:SSS');
    setTimeout(() => this.disabled = false, 1500);
    this.command.editSendTime(this.taskId, time.valueOf());
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

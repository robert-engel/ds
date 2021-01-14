import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StandardTroopTemplate} from '../../../service/structures/standard-troop-template';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WebsocketService} from '../../../service/websocket.service';
import {CommandService} from '../../../service/command/command.service';
import {ToastrService} from 'ngx-toastr';
import {first} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-command-multi-edit',
  templateUrl: './command-multi-edit.component.html',
  styleUrls: ['./command-multi-edit.component.css']
})
export class CommandMultiEditComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  chronoUnits = ['MILLIS', 'SECONDS', 'MINUTES', 'HOURS', 'DAYS'];
  ids: number[];

  unitsForm: FormControl = new FormControl();
  templateForm: FormControl = new FormControl();
  unitForm: FormControl = new FormControl('', Validators.required);
  commandTypeForm: FormControl = new FormControl('', Validators.required);
  addTimeForm: FormGroup = this.fb.group({
    plus: [1, Validators.required],
    unit: [this.chronoUnits[0], Validators.required],
  });
  randomMsForm: FormGroup = this.fb.group({
    min: [0, Validators.compose([Validators.min(0), Validators.max(999)])],
    max: [999, Validators.compose([Validators.min(0), Validators.max(999)])],
  });
  setMsForm = new FormControl(0, Validators.compose([Validators.min(0), Validators.max(999)]));
  timerForm = new FormControl('', Validators.required);

  timerLogics: string[];

  templates: StandardTroopTemplate[];

  units: string[];

  disabled = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number[],
    public dialogRef: MatDialogRef<CommandMultiEditComponent>,
    private fb: FormBuilder,
    private web: WebsocketService,
    private command: CommandService,
    private toastr: ToastrService,
  ) {
    this.ids = data;
  }

  ngOnInit(): void {
    this.web.infoObservable.subscribe(info => {
      this.units = info.units;
    });
    this.command.getTroopTemplates().subscribe(templates => {
      this.templates = templates;
    });
    this.command.getTimerLogic().pipe(first()).subscribe(resp => {
      this.timerLogics = resp.available;
    });
    this.command.multiEditEvents(this.unsub$).subscribe(event => {
      if (event.success > 0) {
        this.toastr.success(
          `${event.success} Erfolgreich bearbeitet.`,
          undefined,
          {
            timeOut: 7000,
          }
        );
      }
      if (event.error > 0) {
        this.toastr.error(
          `${event.error} nicht bearbeitet.`,
          undefined,
          {
            timeOut: 7000,
          }
        );
      }
    });
  }

  setRandomMs(min, max): void {
    this.disabled = true;
    setTimeout(() => this.disabled = false, 1500);
    this.command.randomizeMillis(this.ids, min, max);
  }

  setMs(ms): void {
    this.disabled = true;
    setTimeout(() => this.disabled = false, 1500);
    this.command.setMillis(this.ids, ms);
  }

  addTime(time, unit): void {
    this.disabled = true;
    setTimeout(() => this.disabled = false, 1500);
    this.command.addMillis(this.ids, time, unit);
  }

  updateTimer(data): void {
    this.disabled = true;
    setTimeout(() => this.disabled = false, 1500);
    this.command.multiEditTimer(this.ids, data);
  }

  updateUnits(template, units): void {
    this.disabled = true;
    setTimeout(() => this.disabled = false, 1500);
    this.command.multiEditTroops(
      this.ids,
      template === 'custom' ? undefined : template,
      template === 'custom' ? units : undefined,
    );
  }

  updateUnit(data): void {
    this.disabled = true;
    setTimeout(() => this.disabled = false, 1500);
    this.command.multiEditUnit(this.ids, data);
  }

  updateCommandType(data): void {
    this.disabled = true;
    setTimeout(() => this.disabled = false, 1500);
    this.command.multiEditType(this.ids, data);
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

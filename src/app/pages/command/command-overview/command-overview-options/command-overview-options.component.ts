import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CommandTask} from '../../../../service/structures/command-task';
import {CommandService} from '../../../../service/command/command.service';

@Component({
  selector: 'app-command-overview-options',
  templateUrl: './command-overview-options.component.html',
  styleUrls: ['./command-overview-options.component.css']
})
export class CommandOverviewOptionsComponent implements OnInit {

  _tasks: CommandTask[];

  @Input()
  set ids(tasks: CommandTask[]) {
    this._tasks = tasks;
  }

  @Output()
  edited = new EventEmitter<void>();
  @Output()
  hide = new EventEmitter<void>();

  setForm = this.fb.group({
    ms: [0, Validators.compose([Validators.max(999), Validators.min(0)])],
  });

  randomForm = this.fb.group({
    min: [0, Validators.compose([Validators.max(999), Validators.min(0)])],
    max: [999, Validators.compose([Validators.max(999), Validators.min(0)])],
  });

  constructor(
    private fb: FormBuilder,
    private command: CommandService,
  ) {
  }

  ngOnInit(): void {
  }

  randomize(): void {
    if (this._tasks?.length > 0) {
      this.command.randomizeMillis(
        this._tasks.map(task => task.id),
        this.randomForm.value.min,
        this.randomForm.value.max,
      );
      this.edited.emit(null);
    }
  }

  set(): void {
    if (this._tasks?.length > 0) {
      this.command.setMillis(
        this._tasks.map(task => task.id),
        this.setForm.value.ms,
      );
      this.edited.emit(null);
    }
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommandService} from '../../../service/command/command.service';
import {FormControl, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {ImportWorkbenchFinish} from '../../../service/structures/import-workbench-finish';
import {WebsocketService} from '../../../service/websocket.service';

@Component({
  selector: 'app-command-import-wb',
  templateUrl: './command-import-wb.component.html',
  styleUrls: ['./command-import-wb.component.css']
})
export class CommandImportWbComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  private id: number;
  importing = false;
  progress = 0;
  result: ImportWorkbenchFinish;

  control = new FormControl('', Validators.required);
  catapultControl = new FormControl('///DEFAULT///', Validators.required);

  imagebase: string;
  buildings: string[] = [];

  showMS = new FormControl(false);
  msForm = new FormControl(0);

  constructor(
    private command: CommandService,
    private web: WebsocketService,
  ) {
  }

  ngOnInit(): void {
    this.web.info().subscribe(info => {
      this.imagebase = info.imageBase;
      this.buildings = info.buildings;
    });
    this.command.importWorkbenchStart().subscribe(id => {
      if (id === this.id) {
        this.importing = true;
      }
    });
    this.command.importWorkbenchProgress()
    .pipe(
      filter(resp => resp.id === this.id),
      map(resp => resp.percentage)
    )
    .subscribe(progress => {
      this.progress = progress;
    });
    this.command.importWorkbenchFinish()
    .pipe(filter(resp => resp.id === this.id))
    .subscribe(resp => {
      this.importing = false;
      this.result = resp;
    });
  }

  submit(data, catapult): void {
    this.control.disable();
    if (this.showMS.value === true) {
      this.id = this.command.importWorkbench(data, catapult, this.msForm.value);
    } else {
      this.id = this.command.importWorkbench(data, catapult, undefined);
    }
    setTimeout(() => {
      this.control.enable();
    }, 2000);
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

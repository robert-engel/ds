import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {VillageService} from '../../../service/village/village.service';
import * as moment from 'moment';
import {Moment} from 'moment';
import {Village} from '../../../service/structures/village';
import {PlannerService} from '../../../service/planner/planner.service';
import {CommandPlannerPossibility} from '../../../service/structures/command-planner-possibility';
import {WebsocketService} from '../../../service/websocket.service';
import {interval, Subject} from 'rxjs';
import {debounceTime, filter, takeUntil} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog} from '@angular/material/dialog';
import {CommandScheduleComponent} from '../../command/command-schedule/command-schedule.component';
import {ATTACK, CommandType, SUPPORT} from '../../../service/command/structures/command-type';
import {MatSnackBar, MatSnackBarRef, TextOnlySnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-planner-command',
  templateUrl: './planner-command.component.html',
  styleUrls: ['./planner-command.component.css']
})
export class PlannerCommandComponent implements OnInit, OnDestroy {

  time: Moment;
  target: Village;
  type: CommandType;

  poss: CommandPlannerPossibility[] = [];
  selection = new SelectionModel<CommandPlannerPossibility>(true, []);

  unitsForm = new FormControl([]);

  world: string;
  units: string[] = [];
  cols: string[] = [];

  loading = false;

  snackbarRef: MatSnackBarRef<TextOnlySnackBar>;

  private unsub$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private villageService: VillageService,
    private planner: PlannerService,
    private web: WebsocketService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.web.info().subscribe(info => {
      this.world = info.world;
      this.units = info.units;
      this.setupDisplayedUnits();
    });
    this.setupRouteChangeListener();
    this.setupInterval();
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      if (this.snackbarRef) {
        this.snackbarRef.dismiss();
      }
    });
    this.selection.changed.pipe(debounceTime(1000)).subscribe(() => {
      if (this.selection.hasValue()) {
        this.snackbarRef = this.snackBar.open(`Für ${this.selection.selected.length} ausgewählte planen.`, 'Planen', {
          duration: 99999999,
        });
        this.snackbarRef.onAction().subscribe(() => {
          this.openScheduler(this.selectVillages(), this.target, this.type, undefined, this.time.valueOf());
        });
      } else {
        if (this.snackbarRef) {
          this.snackbarRef.dismiss();
        }
      }
    });
  }

  openScheduler(sources: Village[], target: Village, type: CommandType, unit: string, time: number): void {
    this.dialog.open(CommandScheduleComponent, {
      data: {
        sources: sources,
        target: target,
        type: type,
        unit: unit,
        time: time,
      }
    });
  }

  private setupDisplayedUnits(): void {
    const storage = localStorage.getItem(
      this.world + '_planner_units_' + this.route.snapshot.paramMap.get('type')
    );
    let cols = storage === null ? this.units : JSON.parse(storage);
    if (Array.isArray(cols) === false) {
      cols = this.units;
    }
    const found = cols.some(r => this.units.includes(r));
    if (found === false) {
      cols = this.units;
    }
    this.unitsForm.setValue(cols);
    this.cols = [
      'select',
      'planned',
      'village',
      'distance',
      ...cols,
      'plan'
    ];
    this.unitsForm.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      this.cols = [
        'select',
        'planned',
        'village',
        'distance',
        ...value,
        'plan'
      ];
      localStorage.setItem(this.world + '_planner_units_' + this.type, JSON.stringify(value));
    });
  }

  selectVillages(): Village[] {
    return this.selection.selected.map(sel => sel.village);
  }

  private setupRouteChangeListener(): void {
    this.route.paramMap.subscribe(params => {
      this.loading = true;
      this.villageService.byId(parseInt(params.get('target'), 10)).subscribe(village => {
        this.target = village;
        this.update();
      });
      this.time = moment(parseInt(params.get('time'), 10));
      if ('ATTACK' === params.get('type')) {
        this.type = ATTACK;
      } else if ('SUPPORT' === params.get('type')) {
        this.type = SUPPORT;
      }
    });
  }

  private setupInterval(): void {
    interval(1000).pipe(takeUntil(this.unsub$)).subscribe(num => {
      if (this.poss && this.poss.length > 0) {
        this.poss.forEach((val, index, array) => {
          Object.keys(array[index].remaining).forEach(key => {
            if (array[index].remaining[key] > 0) {
              array[index].remaining[key] -= 1;
            }
          });
        });
      }
    });
  }

  isAllSelected(): boolean {
    return this.selection.selected.length === this.poss.length;
  }

  masterToggle(): void {
    this.isAllSelected() ? this.selection.clear() : this.poss.forEach(row => this.selection.select(row));
  }

  min(val: any): number {
    const keys = Object.keys(val);
    let min = val[keys[0]];
    for (let i = 1; i < keys.length; i++) {
      const key = keys[i];
      if (val[key] > 0 && (val[key] < min || min === 0)) {
        min = val[key];
      }
    }
    return min;
  }

  private update(): void {
    this.planner.possibilities(this.target.id, this.time.valueOf()).subscribe(list => {
      this.poss = list;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

}

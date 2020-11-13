import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Timeframe} from '../../../../service/structures/timeframe';
import {PlannerService} from '../../../../service/planner/planner.service';
import {Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';
import * as moment from 'moment';
import {Options} from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-fake-timeframes',
  templateUrl: './fake-timeframes.component.html',
  styleUrls: ['./fake-timeframes.component.css']
})
export class FakeTimeframesComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  globalStart = new FormControl(moment());
  globalEnd = new FormControl(moment());

  @Output()
  arrivalChange = new EventEmitter<Timeframe[]>();
  @Output()
  sendChange = new EventEmitter<Timeframe[]>();

  options: Options = {
    floor: 0,
    ceil: 24,
    step: 1,
    showTicks: true,
    showTicksValues: true
  };

  sliderControl = new FormControl([8, 23]);
  dateControl = new FormControl(moment());
  typeControl = new FormControl(false);

  arrival: Timeframe[] = [];
  send: Timeframe[] = [];

  set arrivalFrames(arrivalFrames: Timeframe[]) {
    this.arrival = arrivalFrames;
    this.arrivalChange.emit(arrivalFrames);
  }

  get arrivalFrames(): Timeframe[] {
    return this.arrival;
  }

  set sendFrames(sendFrames: Timeframe[]) {
    this.send = sendFrames;
    this.sendChange.emit(sendFrames);
  }

  get sendFrames(): Timeframe[] {
    return this.send;
  }

  constructor(
    private planner: PlannerService,
  ) {
  }

  display(frame: Timeframe): string {
    let text = '';
    if (frame.date) {
      text += 'am ' + moment(frame.date).format('DD.MM.YYYY') + ' ';
    } else {
      text += 'täglich ';
    }
    text += 'von ' + frame.lower + ' Uhr bis ' + frame.upper + ' Uhr';
    return text;
  }

  ngOnInit(): void {
    this.planner.getGlobalTimeFrame().pipe(takeUntil(this.unsub$)).subscribe(times => {
      console.log(times);
      const start = moment(times.start);
      const end = moment(times.end);
      if (this.globalStart.value.valueOf() !== start.valueOf()) {
        this.globalStart.setValue(start, {emitEvent: false});
      }
      if (this.globalEnd.value.valueOf() !== end.valueOf()) {
        this.globalEnd.setValue(end, {emitEvent: false});
      }
    });
    this.globalStart.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      console.log(value);
      this.planner.editGlobalStart(value.valueOf());
    });
    this.globalEnd.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      console.log(value);
      this.planner.editGlobalEnd(value.valueOf());
    });
  }

  delArrivalFrame(frame: Timeframe): void {
    this.arrivalFrames = this.arrivalFrames.filter(val => {
      if (val.date !== frame.date) {
        return true;
      }
      if (val.lower !== frame.lower) {
        return true;
      }
      return val.upper !== frame.upper;
    });
  }

  delSendFrame(frame: Timeframe): void {
    this.sendFrames = this.sendFrames.filter(val => {
      if (val.date !== frame.date) {
        return true;
      }
      if (val.lower !== frame.lower) {
        return true;
      }
      return val.upper !== frame.upper;
    });
  }

  add(): void {
    const pDate = this.dateControl.value.valueOf();
    const pLower = this.sliderControl.value[0];
    const pUpper = this.sliderControl.value[1];
    const obj = {
      upper: pUpper,
      lower: pLower,
      date: pDate,
    };
    this.addObject(obj);
  }

  addDaily(): void {
    const pLower = this.sliderControl.value[0];
    const pUpper = this.sliderControl.value[1];
    const obj = {
      upper: pUpper,
      lower: pLower,
      date: undefined,
    };
    this.addObject(obj);
  }

  private addObject(obj: Timeframe): void {
    if (this.typeControl.value === false) {
      this.sendFrames = [
        ...this.sendFrames,
        obj,
      ];
    } else {
      this.arrivalFrames = [
        ...this.arrivalFrames,
        obj,
      ];
    }
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

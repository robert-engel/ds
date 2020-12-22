import {Component, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatSelect} from '@angular/material/select';
import {Observable} from 'rxjs';
import {Tablet} from '../breakpoints';
import {map, shareReplay} from 'rxjs/operators';
import {BreakpointObserver} from '@angular/cdk/layout';
import {WebsocketService} from '../../service/websocket.service';

@Component({
  selector: 'app-units-holder-input',
  templateUrl: './units-holder-input.component.html',
  styleUrls: ['./units-holder-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => UnitsHolderInputComponent),
    }
  ]
})
export class UnitsHolderInputComponent implements OnInit, ControlValueAccessor {

  @Input()
  forceVertical = false;
  @Input()
  hideCataTarget = false;
  @Input()
  excludeUnits: string[] = [];

  @ViewChild(MatSelect) select: MatSelect;

  units: string[] = [];
  imagebase: string;
  buildings: string[] = [];

  formControl = new FormControl({
    cataTarget: '///DEFAULT///',
  });

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Tablet)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private web: WebsocketService,
  ) {
  }

  propagateChange = (_: any) => {
  };

  ngOnInit(): void {
    this.web.infoObservable.subscribe(info => {
      this.units = info.units;
      this.units = this.units.filter(value => {
        return !this.excludeUnits.includes(value);
      });
      this.imagebase = info.imageBase;
      this.buildings = info.buildings;
    });
    this.units.forEach(item => {
      const obj = {};
      obj[item] = 0;
      this.formControl.patchValue(obj);
    });
    this.formControl.valueChanges.subscribe(value => {
      this.propagateChange(value);
    });
  }

  input(value: string, unit: string): void {
    const obj = {};
    obj[unit] = parseInt(value, 10);
    this.formControl.setValue({
      ...this.formControl.value,
      ...obj
    });
  }

  get cata(): boolean {
    return this.formControl.value.catapult && this.formControl.value.catapult !== '0';
  }

  writeValue(units: any): void {
    if (units === null || units === undefined) {
      units = {
        cataTarget: '///DEFAULT///',
      };
    }
    this.formControl.setValue(units);
    setTimeout(() => {
      if (this.select !== undefined) {
        this.select.value = units.cataTarget;
      }
      this.units.forEach(unit => {
        const elem: any = document.getElementById('troop_input_' + unit);
        if (elem !== null && units.hasOwnProperty(unit)) {
          elem.value = units[unit];
        }
      });
    }, 10);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }
  }

}

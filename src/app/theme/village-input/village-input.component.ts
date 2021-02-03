import {AfterViewInit, Component, forwardRef, Input, OnInit} from '@angular/core';
import {Village} from '../../service/structures/village';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {VillageService} from '../../service/village/village.service';
import {debounceTime, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-village-input',
  templateUrl: './village-input.component.html',
  styleUrls: ['./village-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => VillageInputComponent),
    },
    {
      provide: NG_VALIDATORS,
      useValue: (control: FormControl) => {
        if (control.value === undefined || control.value === null || !control.value.id ||
          !(typeof control.value.id === 'number') || control.value.id < 0) {
          return {source: true};
        }
        return null;
      },
      multi: true
    }
  ]
})
export class VillageInputComponent implements ControlValueAccessor, OnInit, AfterViewInit {

  @Input()
  label = 'Dorf';
  @Input()
  showClear = false;

  villages$: Observable<Village[]>;
  formControl = new FormControl('', (control: FormControl) => {
    if (control.value === undefined || control.value === null || !control.value.id ||
      !(typeof control.value.id === 'number') || control.value.id < 0) {
      return {source: true};
    }
    return null;
  });
  propagateChange = (_: any) => {
  };

  constructor(private villageService: VillageService) {
  }

  ngOnInit(): void {
    this.formControl.valueChanges.subscribe(value => {
      this.propagateChange(value);
    });
  }

  writeValue(obj: any): void {
    this.formControl.setValue(obj);
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

  displayFn(village: Village): string {
    if (village) {
      return village.search;
    } else {
      return '';
    }
  }

  ngAfterViewInit(): void {
    this.villages$ = this.formControl
    .valueChanges
    .pipe(
      debounceTime(300),
      switchMap(value => {
        if (typeof value === 'string') {
          return this.villageService.searchVillages(value);
        } else if (typeof value === 'object' && value !== null) {
          return this.villageService.searchVillages(value.search);
        } else {
          return of(undefined);
        }
      }),
    );
  }
}

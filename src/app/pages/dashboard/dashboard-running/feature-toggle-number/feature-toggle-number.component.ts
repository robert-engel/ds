import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-feature-toggle-number',
  templateUrl: './feature-toggle-number.component.html',
  styleUrls: ['./feature-toggle-number.component.css']
})
export class FeatureToggleNumberComponent implements OnInit {

  onVar = false;
  numVar = 0;

  @Input()
  title = 'Toggle';

  @Input()
  set on(value: boolean) {
    this.onVar = value;
    this.control.setValue(value);
  }

  get on(): boolean {
    return this.onVar;
  }

  @Input()
  set num(value: number) {
    this.numVar = value;
    this.numberControl.setValue(value);
  }

  get num(): number {
    return this.numVar;
  }

  @Input()
  icon = 'power_settings_new';
  @Output()
  toggle = new EventEmitter<boolean>();
  @Output()
  number = new EventEmitter<number>();

  control = new FormControl();
  numberControl = new FormControl();

  constructor() {
  }

  ngOnInit(): void {
    this.control.setValue(this.on);
    this.numberControl.setValue(this.numVar);
  }

  numberChange(event): void {
    this.number.emit(this.numberControl.value);
  }

  tClick(event: Event): void {
    event.stopPropagation();
  }

  click(): void {
    this.toggle.emit(this.on);
  }

  change(event): void {
    event.source.checked = this.on;
    this.toggle.emit(this.on);
  }
}

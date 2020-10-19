import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-feature-toggle',
  templateUrl: './feature-toggle.component.html',
  styleUrls: ['./feature-toggle.component.css']
})
export class FeatureToggleComponent implements OnInit {

  onVar = false;

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
  icon = 'power_settings_new';
  @Output()
  toggle = new EventEmitter<boolean>();

  control = new FormControl();

  constructor() {
  }

  ngOnInit(): void {
    this.control.setValue(this.on);
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

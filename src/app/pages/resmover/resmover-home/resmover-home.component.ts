import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ResmoverService} from '../../../service/resmover/resmover.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-resmover-home',
  templateUrl: './resmover-home.component.html',
  styleUrls: ['./resmover-home.component.css']
})
export class ResmoverHomeComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  minResources = this.fb.group({
    wood: 0,
    stone: 0,
    iron: 0,
  });
  maxResources = new FormControl(0, Validators.required);
  interval = new FormControl(0, Validators.required);
  maxDistance = new FormControl(0, Validators.required);

  disabled = true;

  constructor(
    private resmover: ResmoverService,
    private fb: FormBuilder,
  ) {
  }

  formatLabelPercent(value: number): string | number {
    return value + '%';
  }

  formatLabelInterval(value: number): string | number {
    const restMin = value % 3600;
    const hrs = (value - restMin) / 3600;
    const restSec = restMin % 60;
    const min = (restMin - restSec) / 60;
    return hrs + ':' + ('0' + min).slice(-2) + ':' + ('0' + restSec).slice(-2);
  }

  ngOnInit(): void {
    this.resmover.config(this.unsub$).subscribe(config => {
      this.minResources.setValue(config.minResources);
      this.maxResources.setValue(config.maxResources);
      this.interval.setValue(config.interval);
      this.maxDistance.setValue(config.maxDistance);
      setTimeout(() => this.disabled = false, 500);
    });
  }

  edit(): void {
    this.disabled = true;
    this.resmover.editConfig(
      this.minResources.value.wood,
      this.minResources.value.stone,
      this.minResources.value.iron,
      this.interval.value,
      this.maxResources.value,
      this.maxDistance.value,
    );
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

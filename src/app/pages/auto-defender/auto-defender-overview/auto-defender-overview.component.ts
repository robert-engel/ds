import {Component, OnDestroy, OnInit} from '@angular/core';
import {AutoDefenderService} from '../../../service/auto-defender/auto-defender.service';
import {Subject} from 'rxjs';
import {AutoDefenderConfig} from '../../../service/auto-defender/structure/auto-defender-config';
import {DefenseFeature} from '../../../service/auto-defender/structure/defense-feature';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {DefenseAmount} from '../../../service/auto-defender/structure/defense-amount';

@Component({
  selector: 'app-auto-defender-overview',
  templateUrl: './auto-defender-overview.component.html',
  styleUrls: ['./auto-defender-overview.component.css']
})
export class AutoDefenderOverviewComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  config: AutoDefenderConfig;
  features: DefenseFeature[] = [];
  sizes = ['UNKNOWN', 'GREEN', 'ORANGE', 'RED'];

  enabled: { [feature: string]: FormControl; } = {};
  block: { [feature: string]: { [size: string]: FormGroup; }; } = {};

  constructor(
    private service: AutoDefenderService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.service.getFeatures().subscribe(features => {
      this.features = features;
      this.service.getConfig(this.unsub$).subscribe(config => {
        if (this.config) {
          this.config = config;
          this.update();
        } else {
          this.config = config;
          this.initialize();
        }
      });
    });
  }

  private initialize(): void {
    for (const feature of this.features) {
      this.enabled[feature.id] = new FormControl(this.config.enabled[feature.id]);
      this.enabled[feature.id].valueChanges.subscribe(value => {
        this.service.setEnabled(feature, value);
      });
      this.block[feature.id] = {};
      for (const size of this.sizes) {
        this.block[feature.id][size] = this.fb.group({
          units: this.config.block[feature.id][size].units,
          allowOther: this.config.block[feature.id][size].allowOther,
        });
      }
    }
  }

  private update(): void {
    for (const feature of this.features) {
      this.enabled[feature.id].setValue(this.config.enabled[feature.id], {emitEvent: false});
      for (const size of this.sizes) {
        this.block[feature.id][size].setValue({
          units: this.config.block[feature.id][size].units,
          allowOther: this.config.block[feature.id][size].allowOther,
        });
      }
    }
  }

  setDefense(feature: DefenseFeature, size: string, amount: DefenseAmount): void {
    this.block[feature.id][size].disable();
    this.service.setDefense(feature, size, amount);
    setTimeout(() => {
      this.block[feature.id][size].enable();
    }, 500);
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

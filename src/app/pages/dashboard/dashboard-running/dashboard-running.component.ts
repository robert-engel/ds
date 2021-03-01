import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {DashboardService} from '../../../service/dashboard/dashboard.service';
import {takeUntil} from 'rxjs/operators';
import {IncManagerService} from '../../../service/incmanager/inc-manager.service';
import {RausstellManagerService} from '../../../service/rausstellmanager/rausstell-manager.service';
import {ResmoverService} from '../../../service/resmover/resmover.service';
import {ReLoginConfig} from '../../../service/relogin/structures/re-login-config';
import {ReLoginService} from '../../../service/relogin/re-login.service';
import {FarmService} from '../../../service/farm/farm.service';
import {ScavengeService} from '../../../service/scavenge/scavenge.service';

@Component({
  selector: 'app-dashboard-running',
  templateUrl: './dashboard-running.component.html',
  styleUrls: ['./dashboard-running.component.css']
})
export class DashboardRunningComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  websocket = false;
  farm = false;
  scavenge = false;
  inc = false;
  rausstell = false;
  resmover = false;
  reLoginConfig: ReLoginConfig;

  constructor(
    private dashboardService: DashboardService,
    private incmanagerService: IncManagerService,
    private rausstellService: RausstellManagerService,
    private resmoverService: ResmoverService,
    private reLogin: ReLoginService,
    private farmService: FarmService,
    private scavengeService: ScavengeService,
  ) {
  }

  ngOnInit(): void {
    this.dashboardService.websocketConnects().pipe(takeUntil(this.unsub$)).subscribe(() => {
      this.websocket = true;
    });
    this.dashboardService.websocketDisconnects().pipe(takeUntil(this.unsub$)).subscribe(() => {
      this.websocket = false;
    });
    this.dashboardService.websocketStatus();
    this.incmanagerService.status().pipe(takeUntil(this.unsub$)).subscribe(status => {
      this.inc = status.enabled;
    });
    this.rausstellService.status().pipe(takeUntil(this.unsub$)).subscribe(status => {
      this.rausstell = status.enabled;
    });
    this.resmoverService.config(this.unsub$).subscribe(config => {
      this.resmover = config.enabled;
    });
    this.reLogin.config().pipe(takeUntil(this.unsub$)).subscribe(config => {
      this.reLoginConfig = config;
    });
    this.farmService.config(this.unsub$).subscribe(config => {
      this.farm = config.enabled;
    });
    this.scavengeService.enableEvent(this.unsub$).subscribe(enabled => {
      this.scavenge = enabled;
    });
  }

  reLoginDelay(delay: number): void {
    this.reLogin.setDelay(delay);
  }

  reLoginToggle(value: boolean): void {
    this.reLogin.setEnabled(!value);
  }

  resmoverToggle(value: boolean): void {
    this.resmoverService.setEnabled(!value);
  }

  websocketToggle(value: boolean): void {
    if (value === false) {
      this.dashboardService.websocketReconnect();
    }
  }

  scavengeToggle(value: boolean): void {
    this.scavengeService.setEnabled(!value);
  }

  farmToggle(value: boolean): void {
    this.farmService.setEnabled(!value);
  }

  incToggle(value: boolean): void {
    if (value === true) {
      this.incmanagerService.disable();
    } else {
      this.incmanagerService.enable();
    }
  }

  rausstellToggle(value: boolean): void {
    if (value === true) {
      this.rausstellService.disable();
    } else {
      this.rausstellService.enable();
    }
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

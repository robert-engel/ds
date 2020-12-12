import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {DashboardService} from '../../../service/dashboard/dashboard.service';
import {takeUntil} from 'rxjs/operators';
import {IncManagerService} from '../../../service/incmanager/inc-manager.service';
import {RausstellManagerService} from '../../../service/rausstellmanager/rausstell-manager.service';
import {ResmoverService} from '../../../service/resmover/resmover.service';
import {ReLoginConfig} from '../../../service/relogin/structures/re-login-config';
import {ReLoginService} from '../../../service/relogin/re-login.service';

@Component({
  selector: 'app-dashboard-running',
  templateUrl: './dashboard-running.component.html',
  styleUrls: ['./dashboard-running.component.css']
})
export class DashboardRunningComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  websocket = false;
  farm = false;
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
  }

  reLoginDelay(delay: number): void {
    console.log(delay);
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

  farmToggle(value: boolean): void {
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

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {DashboardService} from '../../service/dashboard/dashboard.service';
import {BotVersionComponent} from '../../pages/dashboard/bot-version/bot-version.component';
import {BotVersion} from '../../service/structures/botVersion';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmStopComponent} from './confirm-stop/confirm-stop.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  toggle: EventEmitter<void> = new EventEmitter<void>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  version: BotVersion;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardService: DashboardService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.dashboardService.getVersion().subscribe(version => {
      this.version = version;
    });
  }

  openVersion(): void {
    this.dialog.open(BotVersionComponent, {
      panelClass: 'custom-width'
    });
  }

  perfToggle(): void {
    this.toggle.emit();
  }

  get running(): boolean {
    return this.dashboardService.isRunning();
  }

  get connected(): boolean {
    return this.dashboardService.isConnected();
  }

  stop(): void {
    this.dialog.open(ConfirmStopComponent);
  }
}

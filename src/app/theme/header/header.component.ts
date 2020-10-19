import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {DashboardService} from '../../service/dashboard/dashboard.service';

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

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardService: DashboardService,
  ) {
  }

  ngOnInit(): void {
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
    this.dashboardService.stop();
  }
}

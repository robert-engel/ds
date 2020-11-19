import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {MENU_ITEMS, MENU_ITEMS_USER} from './pages-menu';
import {DashboardService} from './service/dashboard/dashboard.service';
import {AdminService} from './pages/admin/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menu = MENU_ITEMS;
  menuFull = MENU_ITEMS_USER;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardService: DashboardService,
    private admin: AdminService,
  ) {
  }

  get running(): boolean {
    return this.dashboardService.isRunning();
  }

}

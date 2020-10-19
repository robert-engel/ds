import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../../service/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private dashboardService: DashboardService,
  ) {
  }

  ngOnInit(): void {

  }

  get running(): boolean {
    return this.dashboardService.isRunning();
  }

  get connected(): boolean {
    return this.dashboardService.isConnected();
  }
}

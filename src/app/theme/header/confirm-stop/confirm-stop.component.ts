import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../../../service/dashboard/dashboard.service';

@Component({
  selector: 'app-confirm-stop',
  templateUrl: './confirm-stop.component.html',
  styleUrls: ['./confirm-stop.component.css']
})
export class ConfirmStopComponent implements OnInit {

  stopping = false;

  constructor(private dash: DashboardService) {
  }

  ngOnInit(): void {
  }

  stop(): void {
    this.stopping = true;
    this.dash.stop();
  }
}

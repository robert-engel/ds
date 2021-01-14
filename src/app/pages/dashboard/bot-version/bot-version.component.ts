import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../../../service/dashboard/dashboard.service';
import {BotVersion} from '../../../service/structures/botVersion';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-bot-version',
  templateUrl: './bot-version.component.html',
  styleUrls: ['./bot-version.component.css']
})
export class BotVersionComponent implements OnInit {

  version: BotVersion;

  constructor(
    private dashboardService: DashboardService,
  ) {
  }

  ngOnInit(): void {
    this.dashboardService.getVersion().pipe(first()).subscribe(version => {
      this.version = version;
    });
  }

}

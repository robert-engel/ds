import {Component, Input, OnInit} from '@angular/core';
import {Menu} from './menu';
import {AdminService} from '../../pages/admin/admin.service';
import {DashboardService} from '../../service/dashboard/dashboard.service';
import * as moment from 'moment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  items: Menu[];
  until: string;

  constructor(
    private admin: AdminService,
    private dash: DashboardService
  ) {
  }

  ngOnInit(): void {
    this.dash.getValidUntil().subscribe(num => {
      this.until = moment(num).format('DD.MM.YYYY [um] HH:mm:ss [Uhr]');
    });
  }

  get isAdmin(): boolean {
    return this.admin.getAuthToken() !== null;
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Login} from '../../structures/login';
import {User} from '../../structures/user';
import {AdminService} from '../../admin.service';
import {PageEvent} from '@angular/material/paginator';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-logins',
  templateUrl: './admin-logins.component.html',
  styleUrls: ['./admin-logins.component.css']
})
export class AdminLoginsComponent implements OnInit {

  @Input()
  set user(user: User) {
    this.id = user.id;
    this.pageIndex = 0;
    this.pageSize = 20;
    this.reload();
  }

  id: number;
  logins: Login[];
  loading = false;
  pageSize: number;
  pageIndex: number;

  cols = ['user', 'who', 'time'];

  constructor(private admin: AdminService) {
  }

  ngOnInit(): void {
  }

  reload(): void {
    this.loading = true;
    this.admin.getLogins(this.id, this.pageSize, this.pageIndex * this.pageSize).subscribe(logins => {
      this.logins = logins;
      this.loading = false;
    }, error => this.loading = false);
  }

  pageUpdate(update: PageEvent): void {
    this.pageIndex = update.pageIndex;
    this.pageSize = update.pageSize;
    this.reload();
  }

  formatTime(time: number): string {
    return moment(time).format('DD.MM.YYYY [um] HH:mm:ss [Uhr]');
  }
}

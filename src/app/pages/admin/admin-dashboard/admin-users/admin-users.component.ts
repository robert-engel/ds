import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../admin.service';
import {ToastrService} from 'ngx-toastr';
import {User} from '../../structures/user';
import {PageEvent} from '@angular/material/paginator';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  loading = false;
  users: User[];
  editUser: User;

  displayedColumns = ['id', 'uuid', 'name', 'validUntil', 'isTrial'];

  constructor(
    private admin: AdminService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.admin.getUsers(10, 0).subscribe(users => {
      this.users = users;
      this.loading = false;
    }, error => this.loading = false);
  }

  pageUpdate(update: PageEvent): void {
    this.loading = true;
    this.admin.getUsers(update.pageSize, update.pageIndex * update.pageSize).subscribe(users => {
      this.users = users;
      this.loading = false;
    });
  }

  getValidUntil(until: number): string {
    return moment(until).format('DD.MM.YYYY [um] HH:mm:ss [Uhr]');
  }
}

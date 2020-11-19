import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../structures/user';
import {AdminService} from '../../admin.service';
import {PageEvent} from '@angular/material/paginator';
import * as moment from 'moment';
import {Download} from '../../structures/download';

@Component({
  selector: 'app-admin-downloads',
  templateUrl: './admin-downloads.component.html',
  styleUrls: ['./admin-downloads.component.css']
})
export class AdminDownloadsComponent implements OnInit {

  @Input()
  set user(user: User) {
    this.uuid = user.uuid;
    this.pageIndex = 0;
    this.pageSize = 20;
    this.reload();
  }

  uuid: string;
  downloads: Download[];
  loading = false;
  pageSize: number;
  pageIndex: number;

  cols = ['who', 'time'];

  constructor(private admin: AdminService) {
  }

  ngOnInit(): void {
  }

  reload(): void {
    this.loading = true;
    this.admin.getDownloads(this.uuid, this.pageSize, this.pageIndex * this.pageSize).subscribe(downloads => {
      this.downloads = downloads;
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

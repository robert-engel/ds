import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../admin.service';
import {Release} from '../../structures/release';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {

  releases: Release[];
  loading = false;

  constructor(
    private admin: AdminService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.admin.getReleases().subscribe(releases => {
      this.releases = releases;
      this.loading = false;
    }, error => this.loading = false);
  }

  update(release: Release): void {
    const update = confirm('Auf Version ' + release.tag + ' updaten?');
    if (update) {
      this.admin.update(release.id).subscribe(resp => {
        this.toastr.success('Update wurde ausgeführt.');
      }, error => this.toastr.error('Update fehlgeschlagen.'));
    }
  }

}

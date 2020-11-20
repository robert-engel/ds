import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../../admin.service';
import {User} from '../../structures/user';
import {debounceTime, switchMap} from 'rxjs/operators';
import * as moment from 'moment';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-user-detail',
  templateUrl: './admin-user-detail.component.html',
  styleUrls: ['./admin-user-detail.component.css']
})
export class AdminUserDetailComponent implements OnInit {

  user: User;

  form = new FormControl('', Validators.required);
  edit = false;

  constructor(
    private route: ActivatedRoute,
    private admin: AdminService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(map => this.admin.getUser(parseInt(map.get('id'), 10)))
    ).subscribe(user => {
      this.user = user;
      this.form.setValue(user.name);
    });
    this.form.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
      this.admin.setName(this.user.id, value).subscribe();
    });
  }

  delete(): void {
    this.admin.deleteUser(this.user.id).subscribe(() => {
      this.router.navigate(['admin', 'dashboard']);
    });
  }

  getValidUntil(until: number): string {
    return moment(until).format('DD.MM.YYYY [um] HH:mm:ss [Uhr]');
  }

  incrementWeek(): void {
    this.admin.incrementValid(this.user.id, 1, 0).subscribe(resp => {
      this.user = resp;
    });
  }

  incrementMonth(): void {
    this.admin.incrementValid(this.user.id, 0, 1).subscribe(resp => {
      this.user = resp;
    });
  }
}

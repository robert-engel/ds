import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AdminService} from '../admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  form = new FormControl('', Validators.required);

  constructor(
    private admin: AdminService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    const token = this.admin.getAuthToken();
    if (token !== null) {
      this.form.setValue(token);
    }
  }

  login(): void {
    if (this.form.valid) {
      this.admin.setAuthToken(this.form.value);
      this.router.navigate(['admin', 'dashboard']);
    }
  }
}

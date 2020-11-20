import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AdminService} from '../admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  form = this.fb.group({
    id: 0,
    name: '',
  });

  constructor(
    private fb: FormBuilder,
    private admin: AdminService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  addUser(data): void {
    this.admin.addUser(data.id, data.name).subscribe(user => {
      this.router.navigate(['admin', 'dashboard', 'user', user.id]);
    });
  }
}

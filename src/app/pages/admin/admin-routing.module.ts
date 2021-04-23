import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {AdminService} from './admin.service';
import {AdminUserDetailComponent} from './admin-dashboard/admin-user-detail/admin-user-detail.component';
import {AdminDevComponent} from './admin-dev/admin-dev.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard/user/:id',
        component: AdminUserDetailComponent,
        canActivate: [AdminService]
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
        canActivate: [AdminService]
      },
      {
        path: 'dev',
        component: AdminDevComponent,
        canActivate: [AdminService]
      },
      {
        path: '',
        pathMatch: 'full',
        component: AdminHomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}

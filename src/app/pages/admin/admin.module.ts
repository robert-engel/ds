import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminUsersComponent} from './admin-dashboard/admin-users/admin-users.component';
import {AdminDownloadsComponent} from './admin-dashboard/admin-downloads/admin-downloads.component';
import {AdminLoginsComponent} from './admin-dashboard/admin-logins/admin-logins.component';
import {AdminUpdateComponent} from './admin-dashboard/admin-update/admin-update.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MarkdownModule} from 'ngx-markdown';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { AdminUserDetailComponent } from './admin-dashboard/admin-user-detail/admin-user-detail.component';
import { AdminProxyConnectionsComponent } from './admin-dashboard/admin-proxy-connections/admin-proxy-connections.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { AdminDevComponent } from './admin-dev/admin-dev.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    AdminDashboardComponent,
    AdminUsersComponent,
    AdminDownloadsComponent,
    AdminLoginsComponent,
    AdminUpdateComponent,
    AdminUserDetailComponent,
    AdminProxyConnectionsComponent,
    AdminDevComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    MarkdownModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    ClipboardModule,
  ]
})
export class AdminModule {
}

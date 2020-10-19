import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {LayoutModule} from '@angular/cdk/layout';
import {DashboardModule} from './pages/dashboard/dashboard.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ThemeModule} from './theme/theme.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import localeDe from '@angular/common/locales/de';
import {registerLocaleData} from '@angular/common';
import {ToastrModule} from 'ngx-toastr';

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    DashboardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    NgbModule,
    ThemeModule,
    MatSnackBarModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 60000,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

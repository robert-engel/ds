import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';
import {DashboardComponent} from './dashboard.component';
import {DashboardPrestartComponent} from './dashboard-prestart/dashboard-prestart.component';
import {DashboardRunningComponent} from './dashboard-running/dashboard-running.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {TaskmanagerComponent} from './dashboard-running/taskmanager/taskmanager.component';
import {DriverComponent} from './dashboard-running/driver/driver.component';
import {FeatureToggleComponent} from './dashboard-running/feature-toggle/feature-toggle.component';
import {ErrorLogComponent} from './dashboard-running/error-log/error-log.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {ThemeModule} from '../../theme/theme.module';
import {MarkdownModule} from 'ngx-markdown';
import {MatBadgeModule} from '@angular/material/badge';
import {FeatureToggleNumberComponent} from './dashboard-running/feature-toggle-number/feature-toggle-number.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {CookiesComponent} from './dashboard-running/cookies/cookies.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BotVersionComponent} from './bot-version/bot-version.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardPrestartComponent,
    DashboardRunningComponent,
    TaskmanagerComponent,
    DriverComponent,
    FeatureToggleComponent,
    ErrorLogComponent,
    FeatureToggleNumberComponent,
    CookiesComponent,
    BotVersionComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatProgressBarModule,
    MatChipsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatTableModule,
    ThemeModule,
    MarkdownModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatProgressSpinnerModule,
  ]
})
export class DashboardModule {
}

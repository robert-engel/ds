import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IncsRoutingModule} from './incs-routing.module';
import {IncsComponent} from './incs.component';
import {IncsOverviewComponent} from './incs-overview/incs-overview.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {ThemeModule} from '../../theme/theme.module';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {IncsDetailsComponent} from './incs-details/incs-details.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {IncsCancelTabComponent} from './incs-cancel-tab/incs-cancel-tab.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatInputModule} from '@angular/material/input';
import { IncsCancelTabScheduleComponent } from './incs-cancel-tab/incs-cancel-tab-schedule/incs-cancel-tab-schedule.component';
import { IncsCancelTabListComponent } from './incs-cancel-tab/incs-cancel-tab-list/incs-cancel-tab-list.component';


@NgModule({
  declarations: [IncsComponent, IncsOverviewComponent, IncsDetailsComponent, IncsCancelTabComponent, IncsCancelTabScheduleComponent, IncsCancelTabListComponent],
  imports: [
    CommonModule,
    IncsRoutingModule,
    MatTabsModule,
    MatCardModule,
    ThemeModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatInputModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},
  ],
})
export class IncsModule {
}

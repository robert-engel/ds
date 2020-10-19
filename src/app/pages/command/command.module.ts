import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommandRoutingModule} from './command-routing.module';
import {CommandComponent} from './command.component';
import {CommandHomeComponent} from './command-home/command-home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {CommandSimpleTimerComponent} from './command-simple-timer/command-simple-timer.component';
import {CommandImportWbComponent} from './command-import-wb/command-import-wb.component';
import {CommandOverviewComponent} from './command-overview/command-overview.component';
import {CommandScheduleComponent} from './command-schedule/command-schedule.component';
import {MatCardModule} from '@angular/material/card';
import {CommandEditComponent} from './command-edit/command-edit.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {ThemeModule} from '../../theme/theme.module';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [CommandComponent, CommandHomeComponent, CommandSimpleTimerComponent, CommandImportWbComponent,
    CommandOverviewComponent, CommandScheduleComponent, CommandEditComponent],
  imports: [
    CommonModule,
    CommandRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    ThemeModule,
    MatIconModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},
  ],
})
export class CommandModule {
}

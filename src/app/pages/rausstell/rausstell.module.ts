import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RausstellRoutingModule } from './rausstell-routing.module';
import { RausstellComponent } from './rausstell.component';
import { RausstellHomeComponent } from './rausstell-home/rausstell-home.component';
import { RausstellVillagesComponent } from './rausstell-villages/rausstell-villages.component';
import { RausstellIncsComponent } from './rausstell-incs/rausstell-incs.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {ThemeModule} from '../../theme/theme.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { RausstellRetimeComponent } from './rausstell-retime/rausstell-retime.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {MatMomentDateModule} from '@angular/material-moment-adapter';


@NgModule({
  declarations: [RausstellComponent, RausstellHomeComponent, RausstellVillagesComponent, RausstellIncsComponent, RausstellRetimeComponent],
  imports: [
    CommonModule,
    RausstellRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    ThemeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},
  ],
})
export class RausstellModule { }

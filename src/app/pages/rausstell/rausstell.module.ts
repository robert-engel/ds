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


@NgModule({
  declarations: [RausstellComponent, RausstellHomeComponent, RausstellVillagesComponent, RausstellIncsComponent],
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
    MatIconModule
  ]
})
export class RausstellModule { }

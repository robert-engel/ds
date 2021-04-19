import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoRecruitRoutingModule } from './auto-recruit-routing.module';
import { AutoRecruitComponent } from './auto-recruit.component';
import { AutoRecruitOverviewComponent } from './auto-recruit-overview/auto-recruit-overview.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ThemeModule} from '../../theme/theme.module';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [AutoRecruitComponent, AutoRecruitOverviewComponent],
  imports: [
    CommonModule,
    AutoRecruitRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ThemeModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ]
})
export class AutoRecruitModule { }

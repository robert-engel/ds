import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { TroopTemplateComponent } from './troop-template/troop-template.component';
import {MatButtonModule} from '@angular/material/button';
import {ThemeModule} from '../../theme/theme.module';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [SettingsComponent, TroopTemplateComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatButtonModule,
    ThemeModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule
  ]
})
export class SettingsModule { }

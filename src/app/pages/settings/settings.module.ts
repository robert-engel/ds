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
import { DiscordWebhooksComponent } from './discord-webhooks/discord-webhooks.component';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [SettingsComponent, TroopTemplateComponent, DiscordWebhooksComponent],
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
    MatBadgeModule,
    MatSelectModule,
    MatListModule
  ]
})
export class SettingsModule { }

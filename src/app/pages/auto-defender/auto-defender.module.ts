import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoDefenderRoutingModule } from './auto-defender-routing.module';
import { AutoDefenderComponent } from './auto-defender.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { AutoDefenderOverviewComponent } from './auto-defender-overview/auto-defender-overview.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {ThemeModule} from '../../theme/theme.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [AutoDefenderComponent, AutoDefenderOverviewComponent],
  imports: [
    CommonModule,
    AutoDefenderRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatExpansionModule,
    ThemeModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class AutoDefenderModule { }

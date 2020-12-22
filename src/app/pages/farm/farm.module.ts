import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FarmRoutingModule} from './farm-routing.module';
import {FarmComponent} from './farm.component';
import {MatTabsModule} from '@angular/material/tabs';
import {FarmOverviewComponent} from './farm-overview/farm-overview.component';
import {FarmTaskComponent} from './farm-task/farm-task.component';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ReactiveFormsModule} from '@angular/forms';
import {ThemeModule} from '../../theme/theme.module';
import {FarmTaskEditComponent} from './farm-task-edit/farm-task-edit.component';
import {FarmTaskAddComponent} from './farm-task-add/farm-task-add.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [FarmComponent, FarmOverviewComponent, FarmTaskComponent, FarmTaskEditComponent, FarmTaskAddComponent],
  imports: [
    CommonModule,
    FarmRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    ThemeModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSliderModule,
    MatTooltipModule,
    MatInputModule,
    MatTableModule,
  ],
})
export class FarmModule {
}

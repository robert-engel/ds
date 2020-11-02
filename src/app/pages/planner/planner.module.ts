import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlannerRoutingModule} from './planner-routing.module';
import {PlannerComponent} from './planner.component';
import {PlannerFakesComponent} from './planner-fakes/planner-fakes.component';
import {PlannerCommandComponent} from './planner-command/planner-command.component';
import {MatTabsModule} from '@angular/material/tabs';
import {PlannerHomeComponent} from './planner-home/planner-home.component';
import {MatCardModule} from '@angular/material/card';
import {ThemeModule} from '../../theme/theme.module';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {PlannerCommandOpenComponent} from './planner-home/planner-command-open/planner-command-open.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FakeSelectorTableComponent } from './planner-fakes/fake-selector-table/fake-selector-table.component';
import { FakeSelectorTemplateComponent } from './planner-fakes/fake-selector-template/fake-selector-template.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [PlannerComponent, PlannerFakesComponent, PlannerCommandComponent, PlannerHomeComponent, PlannerCommandOpenComponent, FakeSelectorTableComponent, FakeSelectorTemplateComponent],
  imports: [
    CommonModule,
    PlannerRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatMomentDateModule,
    ThemeModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},
  ],
})
export class PlannerModule {
}

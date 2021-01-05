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
import {FakeSelectorTableComponent} from './planner-fakes/fake-selector-table/fake-selector-table.component';
import {FakeSelectorTemplateComponent} from './planner-fakes/fake-selector-template/fake-selector-template.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {FakeSourcesComponent} from './planner-fakes/fake-sources/fake-sources.component';
import {FakeTargetsComponent} from './planner-fakes/fake-targets/fake-targets.component';
import {FakeTimeframesComponent} from './planner-fakes/fake-timeframes/fake-timeframes.component';
import {FakePlanComponent} from './planner-fakes/fake-plan/fake-plan.component';
import {MatStepperModule} from '@angular/material/stepper';
import {NgxSliderModule} from '@angular-slider/ngx-slider';
import {MatListModule} from '@angular/material/list';
import {FakeConfirmationComponent} from './planner-fakes/fake-confirmation/fake-confirmation.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    PlannerComponent,
    PlannerFakesComponent,
    PlannerCommandComponent,
    PlannerHomeComponent,
    PlannerCommandOpenComponent,
    FakeSelectorTableComponent,
    FakeSelectorTemplateComponent,
    FakeSourcesComponent,
    FakeTargetsComponent,
    FakeTimeframesComponent,
    FakePlanComponent,
    FakeConfirmationComponent
  ],
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
    MatExpansionModule,
    MatStepperModule,
    NgxSliderModule,
    MatListModule,
    MatDialogModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},
  ],
})
export class PlannerModule {
}

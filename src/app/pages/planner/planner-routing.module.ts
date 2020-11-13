import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlannerComponent} from './planner.component';
import {PlannerHomeComponent} from './planner-home/planner-home.component';
import {PlannerCommandComponent} from './planner-command/planner-command.component';
import {PlannerFakesComponent} from './planner-fakes/planner-fakes.component';
import {FakePlanComponent} from './planner-fakes/fake-plan/fake-plan.component';

const routes: Routes = [
  {
    path: '',
    component: PlannerComponent,
    children: [
      {
        path: 'fake/plan',
        component: FakePlanComponent,
      },
      {
        path: 'fake',
        component: PlannerFakesComponent,
      },
      {
        path: 'command/:target/:time',
        component: PlannerCommandComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: PlannerHomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlannerRoutingModule {
}

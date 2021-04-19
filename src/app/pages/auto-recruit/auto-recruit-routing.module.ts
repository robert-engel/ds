import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AutoRecruitComponent} from './auto-recruit.component';
import {AutoRecruitOverviewComponent} from './auto-recruit-overview/auto-recruit-overview.component';

const routes: Routes = [
  {
    path: '',
    component: AutoRecruitComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AutoRecruitOverviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoRecruitRoutingModule {
}

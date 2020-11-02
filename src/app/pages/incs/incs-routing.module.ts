import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IncsComponent} from './incs.component';
import {IncsOverviewComponent} from './incs-overview/incs-overview.component';
import {IncsDetailsComponent} from './incs-details/incs-details.component';

const routes: Routes = [
  {
    path: '',
    component: IncsComponent,
    children: [
      {
        path: ':id',
        component: IncsDetailsComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: IncsOverviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncsRoutingModule {
}

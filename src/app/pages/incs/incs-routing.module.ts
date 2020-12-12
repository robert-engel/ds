import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IncsComponent} from './incs.component';
import {IncsOverviewComponent} from './incs-overview/incs-overview.component';
import {IncsDetailsComponent} from './incs-details/incs-details.component';
import {IncsCancelTabComponent} from './incs-cancel-tab/incs-cancel-tab.component';

const routes: Routes = [
  {
    path: '',
    component: IncsComponent,
    children: [
      {
        path: 'cancel',
        component: IncsCancelTabComponent,
      },
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

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FarmComponent} from './farm.component';
import {FarmOverviewComponent} from './farm-overview/farm-overview.component';

const routes: Routes = [
  {
    path: '',
    component: FarmComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: FarmOverviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AutoDefenderComponent} from './auto-defender.component';
import {AutoDefenderOverviewComponent} from './auto-defender-overview/auto-defender-overview.component';

const routes: Routes = [
  {
    path: '',
    component: AutoDefenderComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AutoDefenderOverviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoDefenderRoutingModule {
}

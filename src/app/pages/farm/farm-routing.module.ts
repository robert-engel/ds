import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FarmComponent} from './farm.component';
import {FarmOverviewComponent} from './farm-overview/farm-overview.component';
import {FarmRouteComponent} from './farm-route/farm-route.component';
import {FarmSettingsComponent} from './farm-settings/farm-settings.component';

const routes: Routes = [
  {
    path: '',
    component: FarmComponent,
    children: [
      {
        path: 'assist',
        component: FarmOverviewComponent,
      },
      {
        path: 'routes',
        component: FarmRouteComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: FarmSettingsComponent,
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

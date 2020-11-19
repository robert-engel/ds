import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RausstellComponent} from './rausstell.component';
import {RausstellHomeComponent} from './rausstell-home/rausstell-home.component';
import {RausstellVillagesComponent} from './rausstell-villages/rausstell-villages.component';
import {RausstellIncsComponent} from './rausstell-incs/rausstell-incs.component';
import {RausstellRetimeComponent} from './rausstell-retime/rausstell-retime.component';

const routes: Routes = [
  {
    path: '',
    component: RausstellComponent,
    children: [
      {
        path: 'retime',
        component: RausstellRetimeComponent,
      },
      {
        path: 'villages',
        component: RausstellVillagesComponent,
      },
      {
        path: 'incs',
        component: RausstellIncsComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: RausstellHomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RausstellRoutingModule {
}

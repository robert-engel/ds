import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatapultComponent} from './catapult.component';
import {CatapultHomeComponent} from './catapult-home/catapult-home.component';
import {CatapultInfoComponent} from './catapult-info/catapult-info.component';

const routes: Routes = [
  {
    path: '',
    component: CatapultComponent,
    children: [
      {
        path: 'info',
        component: CatapultInfoComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: CatapultHomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatapultRoutingModule {
}

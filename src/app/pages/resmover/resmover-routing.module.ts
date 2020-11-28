import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResmoverComponent} from './resmover.component';
import {ResmoverHomeComponent} from './resmover-home/resmover-home.component';

const routes: Routes = [
  {
    path: '',
    component: ResmoverComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ResmoverHomeComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResmoverRoutingModule {
}

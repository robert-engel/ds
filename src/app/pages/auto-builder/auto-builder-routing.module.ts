import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AutoBuilderComponent} from './auto-builder.component';
import {AutoBuilderOverviewComponent} from './auto-builder-overview/auto-builder-overview.component';

const routes: Routes = [
  {
    path: '',
    component: AutoBuilderComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AutoBuilderOverviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoBuilderRoutingModule {
}

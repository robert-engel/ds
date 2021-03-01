import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScavengeComponent} from './scavenge.component';
import {ScavengeOverviewComponent} from './scavenge-overview/scavenge-overview.component';

const routes: Routes = [
  {
    path: '',
    component: ScavengeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ScavengeOverviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScavengeRoutingModule {
}

import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DashboardService} from './service/dashboard/dashboard.service';
import {environment} from '../environments/environment';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module')
    .then(m => m.AdminModule),
  },
  {
    path: 'resmover',
    loadChildren: () => import('./pages/resmover/resmover.module')
    .then(m => m.ResmoverModule),
  },
  {
    path: 'command',
    canActivate: [DashboardService],
    loadChildren: () => import('./pages/command/command.module')
    .then(m => m.CommandModule),
  },
  {
    path: 'settings',
    canActivate: [DashboardService],
    loadChildren: () => import('./pages/settings/settings.module')
    .then(m => m.SettingsModule),
  },
  {
    path: 'rausstell',
    canActivate: [DashboardService],
    loadChildren: () => import('./pages/rausstell/rausstell.module')
    .then(m => m.RausstellModule),
  },
  {
    path: 'incs',
    canActivate: [DashboardService],
    loadChildren: () => import('./pages/incs/incs.module')
    .then(m => m.IncsModule),
  },
  {
    path: 'planner',
    canActivate: [DashboardService],
    loadChildren: () => import('./pages/planner/planner.module')
    .then(m => m.PlannerModule),
  },
  {path: '', component: DashboardComponent},
  {path: '**', redirectTo: ''},
];

const config: ExtraOptions = {
  useHash: false,
  enableTracing: !environment.production,
};


@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

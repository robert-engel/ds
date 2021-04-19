import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DashboardService} from './service/dashboard/dashboard.service';
import {environment} from '../environments/environment';
import {ConnectComponent} from './c/connect/connect.component';

const routes: Routes = [
  {
    path: 'recruit',
    canActivate: [DashboardService],
    loadChildren: () => import('./pages/auto-recruit/auto-recruit.module')
    .then(m => m.AutoRecruitModule),
  },
  {
    path: 'cata',
    canActivate: [DashboardService],
    loadChildren: () => import('./pages/catapult/catapult.module')
    .then(m => m.CatapultModule),
  },
  {
    path: 'builder',
    canActivate: [DashboardService],
    loadChildren: () => import('./pages/auto-builder/auto-builder.module')
    .then(m => m.AutoBuilderModule),
  },
  {
    path: 'scavenge',
    canActivate: [DashboardService],
    loadChildren: () => import('./pages/scavenge/scavenge.module')
    .then(m => m.ScavengeModule),
  },
  {
    path: 'defender',
    canActivate: [DashboardService],
    loadChildren: () => import('./pages/auto-defender/auto-defender.module')
    .then(m => m.AutoDefenderModule),
  },
  {
    path: 'farm',
    canActivate: [DashboardService],
    loadChildren: () => import('./pages/farm/farm.module')
    .then(m => m.FarmModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module')
    .then(m => m.AdminModule),
  },
  {
    path: 'resmover',
    canActivate: [DashboardService],
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
  {
    path: 'c/:token',
    component: ConnectComponent
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

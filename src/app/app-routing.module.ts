import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DashboardService} from './service/dashboard/dashboard.service';

const routes: Routes = [
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
  {path: '', component: DashboardComponent},
  {path: '**', redirectTo: ''},
];

const config: ExtraOptions = {
  useHash: false,
  enableTracing: true,
};


@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

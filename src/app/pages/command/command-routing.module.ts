import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommandComponent} from './command.component';
import {CommandOverviewComponent} from './command-overview/command-overview.component';
import {CommandScheduleComponent} from './command-schedule/command-schedule.component';
import {CommandSimpleTimerComponent} from './command-simple-timer/command-simple-timer.component';
import {CommandImportWbComponent} from './command-import-wb/command-import-wb.component';
import {CommandEditComponent} from './command-edit/command-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CommandComponent,
    children: [
      {
        path: 'schedule',
        component: CommandScheduleComponent,
      },
      {
        path: 'timer',
        component: CommandSimpleTimerComponent,
      },
      {
        path: 'import',
        component: CommandImportWbComponent,
      },
      {
        path: 'edit/:id',
        component: CommandEditComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: CommandOverviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandRoutingModule {
}

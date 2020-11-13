import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from './settings.component';
import {TroopTemplateComponent} from './troop-template/troop-template.component';
import {DiscordWebhooksComponent} from './discord-webhooks/discord-webhooks.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'discord',
        component: DiscordWebhooksComponent,
      },
      {
        path: 'troops',
        component: TroopTemplateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}

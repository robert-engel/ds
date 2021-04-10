import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from './settings.component';
import {TroopTemplateComponent} from './troop-template/troop-template.component';
import {DiscordWebhooksComponent} from './discord-webhooks/discord-webhooks.component';
import {BotIpComponent} from './bot-ip/bot-ip.component';
import {DashboardService} from '../../service/dashboard/dashboard.service';
import {AntiCaptchaComponent} from './anti-captcha/anti-captcha.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'discord',
        component: DiscordWebhooksComponent,
        canActivate: [DashboardService],
      },
      {
        path: 'troops',
        component: TroopTemplateComponent,
        canActivate: [DashboardService],
      },
      {
        path: 'anti-captcha',
        component: AntiCaptchaComponent,
        canActivate: [DashboardService],
      },
      {
        path: 'ip',
        component: BotIpComponent,
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

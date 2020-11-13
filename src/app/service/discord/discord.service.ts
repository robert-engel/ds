import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DiscordWebhook} from './structures/discord-webhook';
import {WebsocketService} from '../websocket.service';
import {GetPossibleWebhooks} from './packet/get-possible-webhooks';
import {first, map} from 'rxjs/operators';
import {DiscordWebhookEntity} from './structures/discord-webhook-entity';
import {GetSetupWebhooks} from './packet/get-setup-webhooks';
import {DeleteWebhookRequest} from './packet/delete-webhook-request';
import {AddWebhookRequest} from './packet/add-webhook-request';

@Injectable({
  providedIn: 'root'
})
export class DiscordService {

  constructor(private web: WebsocketService) {
  }

  addEvents(): Observable<DiscordWebhookEntity> {
    return this.web.observable('WebhookAddedEvent');
  }

  deleteEvents(): Observable<number> {
    return this.web.observable('WebhookDeletedEvent').pipe(map(resp => resp.id));
  }

  getPossible(): Observable<DiscordWebhook[]> {
    return this.web.observable('PossibleWebhooksResponse', new GetPossibleWebhooks())
    .pipe(first());
  }

  getSetup(): Observable<DiscordWebhookEntity[]> {
    return this.web.observable('SetupWebhooksResponse', new GetSetupWebhooks())
    .pipe(first());
  }

  delete(id: number): void {
    this.web.sendData(new DeleteWebhookRequest(id));
  }

  add(ordinal: number, template: string, username: string, url: string): void {
    this.web.sendData(new AddWebhookRequest(ordinal, template, username, url));
  }
}

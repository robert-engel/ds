import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Observable} from 'rxjs';
import {EnabledStatus} from '../structures/enabled-status';
import {RequestIncManagerStatusPacket} from './packet/request-inc-manager-status-packet';
import {EnableIncManagerPacket} from './packet/enable-inc-manager-packet';
import {DisableIncManagerPacket} from './packet/disable-inc-manager-packet';

@Injectable({
  providedIn: 'root'
})
export class IncManagerService {

  constructor(private websocketService: WebsocketService) {
  }

  status(): Observable<EnabledStatus> {
    return this.websocketService.observable('IncManagerStatusPacket', new RequestIncManagerStatusPacket());
  }

  enable(): void {
    this.websocketService.sendData(new EnableIncManagerPacket());
  }

  disable(): void {
    this.websocketService.sendData(new DisableIncManagerPacket());
  }
}

import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Observable} from 'rxjs';
import {EnabledStatus} from '../structures/enabled-status';
import {RequestIncManagerStatusPacket} from './packet/request-inc-manager-status-packet';
import {EnableIncManagerPacket} from './packet/enable-inc-manager-packet';
import {DisableIncManagerPacket} from './packet/disable-inc-manager-packet';
import {RequestIncListPacket} from './packet/request-inc-list-packet';
import {filter, first} from 'rxjs/operators';
import {IncListResponse} from '../structures/inc-list-response';
import {IncomingEntity} from '../structures/incoming-entity';
import {RequestIncPacket} from './packet/request-inc-packet';
import {EditIncRequest} from './packet/edit-inc-request';

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

  updateSlowest(id: number, slowest: string): void {
    this.websocketService.sendData(new EditIncRequest(id, slowest));
  }

  incUpdates(id: number): Observable<IncomingEntity> {
    return this.websocketService.observable('IncUpdatePacket')
    .pipe(filter(resp => resp.id === id));
  }

  getIncList(pFirst: number, max: number, cancelled?: boolean, units?: string[]): Observable<IncListResponse> {
    const req = new RequestIncListPacket(pFirst, max, cancelled, units);
    return this.websocketService.observable('IncListPacket', req)
    .pipe(
      filter(resp => resp.id === req.id),
      first()
    );
  }

  getInc(id: number): Observable<IncomingEntity> {
    return this.websocketService.observable('GetIncResponse', new RequestIncPacket(id))
    .pipe(
      filter(resp => resp.id === id),
      first()
    );
  }
}

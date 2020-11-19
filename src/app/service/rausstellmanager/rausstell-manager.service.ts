import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Observable} from 'rxjs';
import {EnabledStatus} from '../structures/enabled-status';
import {RequestRausstellManagerStatusPacket} from './packet/request-rausstell-manager-status-packet';
import {EnableRausstellManagerPacket} from './packet/enable-rausstell-manager-packet';
import {DisableRausstellManagerPacket} from './packet/disable-rausstell-manager-packet';
import {GetRausstellTroopTemplateRequest} from './packet/get-rausstell-troop-template-request';
import {IncomingEntity} from '../structures/incoming-entity';
import {filter, first, map} from 'rxjs/operators';
import {GetIgnoredIncsRequest} from './packet/get-ignored-incs-request';
import {Village} from '../structures/village';
import {GetIgnoredVillagesRequest} from './packet/get-ignored-villages-request';
import {IsIncIgnoredRequest} from './packet/is-inc-ignored-request';
import {IgnoreIncRequest} from './packet/ignore-inc-request';
import {IgnoreVillageRequest} from './packet/ignore-village-request';
import {UnignoreVillageRequest} from './packet/unignore-village-request';
import {UnignoreIncRequest} from './packet/unignore-inc-request';
import {SetRausstellTroopTemplateRequest} from './packet/set-rausstell-troop-template-request';
import {AntiRetimeRequest} from './packet/anti-retime-request';

@Injectable({
  providedIn: 'root'
})
export class RausstellManagerService {

  constructor(private websocketService: WebsocketService) {
  }

  antiRetime(time: number, village: number, units: any): void {
    this.websocketService.sendData(new AntiRetimeRequest(time, village, units));
  }

  status(): Observable<EnabledStatus> {
    return this.websocketService.observable('RausstellManagerStatusPacket', new RequestRausstellManagerStatusPacket());
  }

  enable(): void {
    this.websocketService.sendData(new EnableRausstellManagerPacket());
  }

  disable(): void {
    this.websocketService.sendData(new DisableRausstellManagerPacket());
  }

  troops(): Observable<any> {
    return this.websocketService.observable('GetRausstellTroopTemplateResponse', new GetRausstellTroopTemplateRequest());
  }

  setTroops(troops: any): void {
    this.websocketService.sendData(new SetRausstellTroopTemplateRequest(troops));
  }

  ignoredIncs(): Observable<IncomingEntity[]> {
    return this.websocketService
    .observable('IgnoredIncsResponse', new GetIgnoredIncsRequest())
    .pipe(map(resp => resp.incs));
  }

  ignoredVillages(): Observable<Village[]> {
    return this.websocketService
    .observable('IgnoredVillagesResponse', new GetIgnoredVillagesRequest())
    .pipe(map(resp => resp.villages));
  }

  ignoredInc(): Observable<IncomingEntity> {
    return this.websocketService.observable('IgnoreIncPacket');
  }

  ignoredVillage(): Observable<Village> {
    return this.websocketService.observable('IgnoreVillagePacket');
  }

  unignoredInc(): Observable<IncomingEntity> {
    return this.websocketService.observable('UnignoreIncPacket');
  }

  unignoredVillage(): Observable<Village> {
    return this.websocketService.observable('UnignoreVillagePacket');
  }

  isIncIgnored(id: number): Observable<boolean> {
    const req = new IsIncIgnoredRequest(Math.random(), id);
    return this.websocketService
    .observable('IsIncIgnoredResponse', req)
    .pipe(
      filter(resp => resp.id === req.id),
      first(),
      map(resp => resp.ignored)
    );
  }

  ignoreInc(id: number): void {
    this.websocketService.sendData(new IgnoreIncRequest(id));
  }

  ignoreVillage(id: number): void {
    this.websocketService.sendData(new IgnoreVillageRequest(id));
  }

  unignoreVillage(id: number): void {
    this.websocketService.sendData(new UnignoreVillageRequest(id));
  }

  unignoreInc(id: number): void {
    this.websocketService.sendData(new UnignoreIncRequest(id));
  }
}

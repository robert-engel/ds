import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ReLoginConfig} from './structures/re-login-config';
import {WebsocketService} from '../websocket.service';
import {GetReloginConfigRequest} from './packet/get-relogin-config-request';
import {ReloginEnableRequest} from './packet/relogin-enable-request';
import {ReloginSetDelayRequest} from './packet/relogin-set-delay-request';

@Injectable({
  providedIn: 'root'
})
export class ReLoginService {

  constructor(private web: WebsocketService) {
  }

  config(): Observable<ReLoginConfig> {
    return this.web.observable('ReLoginConfigResponse', new GetReloginConfigRequest());
  }

  setEnabled(enabled: boolean): void {
    this.web.sendData(new ReloginEnableRequest(enabled));
  }

  setDelay(delay: number): void {
    this.web.sendData(new ReloginSetDelayRequest(delay));
  }
}

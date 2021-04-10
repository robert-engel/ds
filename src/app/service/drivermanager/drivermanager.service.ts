import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Observable} from 'rxjs';
import {AllJobs} from '../structures/all-jobs';
import {RequestAllJobs} from './packet/request-all-jobs';
import {InternalJob} from '../structures/internal-job';
import {RequestCurrentJob} from './packet/request-current-job';
import {DriverConfig} from './structure/driver-config';
import {DriverManagerConfigRequest} from './packet/driver-manager-config-request';
import {takeUntil} from 'rxjs/operators';
import {AntiCaptchaSetEnabledRequest} from './packet/anti-captcha-set-enabled-request';
import {AntiCaptchaSetKeyRequest} from './packet/anti-captcha-set-key-request';

@Injectable({
  providedIn: 'root'
})
export class DrivermanagerService {

  constructor(private websocketService: WebsocketService) {
  }

  config(unsub: Observable<void>): Observable<DriverConfig> {
    return this.websocketService.observable('DriverManagerConfigResponse', new DriverManagerConfigRequest())
    .pipe(takeUntil(unsub));
  }

  setEnabled(enabled: boolean): void {
    this.websocketService.sendData(new AntiCaptchaSetEnabledRequest(enabled));
  }

  setKey(key: string): void {
    this.websocketService.sendData(new AntiCaptchaSetKeyRequest(key));
  }

  allJobs(): Observable<AllJobs> {
    return this.websocketService.observable('AllJobsResponse', new RequestAllJobs());
  }

  currentJob(): Observable<InternalJob> {
    return this.websocketService.observable('CurrentDriverTaskResponse', new RequestCurrentJob());
  }

  addJob(): Observable<InternalJob> {
    return this.websocketService.observable('ScheduleDriverTaskEvent');
  }

  finishJob(): Observable<InternalJob> {
    return this.websocketService.observable('FinishedDriverTaskEvent');
  }

  startJob(): Observable<InternalJob> {
    return this.websocketService.observable('StartDriverTaskEvent');
  }
}

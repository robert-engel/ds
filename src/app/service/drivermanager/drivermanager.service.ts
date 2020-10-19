import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Observable} from 'rxjs';
import {AllJobs} from '../structures/all-jobs';
import {RequestAllJobs} from './packet/request-all-jobs';
import {InternalJob} from '../structures/internal-job';
import {RequestCurrentJob} from './packet/request-current-job';

@Injectable({
  providedIn: 'root'
})
export class DrivermanagerService {

  constructor(private websocketService: WebsocketService) {
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

import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Observable} from 'rxjs';
import {CommandPlannerPossibility} from '../structures/command-planner-possibility';
import {GetCommandPlannerPossibilitiesRequest} from './packet/get-command-planner-possibilities-request';
import {filter, first, map, shareReplay} from 'rxjs/operators';
import {FakeSelector} from '../structures/fake-selector';
import {FakeSelectorRequest} from './packet/fake-selector-request';
import {GetFakeTemplateRequest} from './packet/get-fake-template-request';
import {EditFakeTemplateRequest} from './packet/edit-fake-template-request';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {

  cache = new Map<string, Observable<CommandPlannerPossibility[]>>();

  constructor(private websocket: WebsocketService) {
  }

  possibilities(village: number, time: number): Observable<CommandPlannerPossibility[]> {
    if (!this.cache.has(village + '|' + time)) {
      const req = new GetCommandPlannerPossibilitiesRequest(village, time);
      this.cache.set(
        village + '|' + time,
        this.websocket.observable(
          'CommandPlannerPossibilitiesResponse',
          req
        ).pipe(
          filter(resp => req.id === resp.id),
          first(),
          map(resp => resp.list),
          shareReplay(1)
        )
      );
    }
    return this.cache.get(village + '|' + time);
  }

  getFakeSelector(): Observable<FakeSelector[]> {
    return this.websocket.observable('FakeSelectorResponse', new FakeSelectorRequest())
    .pipe(first());
  }

  getFakeTemplate(): Observable<any> {
    return this.websocket.observable('FakeTemplateResponse', new GetFakeTemplateRequest());
  }

  updateFakeTemplate(troops: any): void {
    this.websocket.sendData(new EditFakeTemplateRequest(troops));
  }
}

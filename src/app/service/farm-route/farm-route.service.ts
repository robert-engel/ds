import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Observable} from 'rxjs';
import {filter, first, map, takeUntil} from 'rxjs/operators';
import {FarmRoute} from './structures/farm-route';
import {ListFarmRouteRequest} from './packet/list-farm-route-request';
import {AddFarmRouteRequest} from './packet/add-farm-route-request';
import {DeleteFarmRouteRequest} from './packet/delete-farm-route-request';
import {EditFarmRouteRequest} from './packet/edit-farm-route-request';
import {FarmTaskEnabled} from '../farm/structures/farm-task-enabled';
import {FarmRouteSetEnabledRequest} from './packet/farm-route-set-enabled-request';
import {FarmRouteConfig} from './structures/farm-route-config';
import {FarmRouteConfigRequest} from './packet/farm-route-config-request';
import {SetFarmRouteAutoDisableRequest} from './packet/set-farm-route-auto-disable-request';

@Injectable({
  providedIn: 'root'
})
export class FarmRouteService {

  constructor(private websocketService: WebsocketService) {
  }

  config(unsub: Observable<void>): Observable<FarmRouteConfig> {
    return this.websocketService.observable(
      'FarmRouteConfigResponse',
      new FarmRouteConfigRequest()
    ).pipe(takeUntil(unsub));
  }

  setAutoDisable(autoDisable: boolean): void {
    this.websocketService.sendData(new SetFarmRouteAutoDisableRequest(autoDisable));
  }

  list(unsub: Observable<void>): Observable<FarmRoute[]> {
    return this.websocketService.observable(
      'ListFarmRouteResponse',
      new ListFarmRouteRequest()
    ).pipe(takeUntil(unsub));
  }

  addEntity(source: number, target: number, troops: any, timerInterval: number): Observable<FarmRoute> {
    return this.websocketService.observable(
      'AddFarmRouteResponse',
      new AddFarmRouteRequest(source, target, troops, timerInterval)
    ).pipe(first());
  }

  deleteEntity(id: number): Observable<number> {
    return this.websocketService.observable(
      'DeleteFarmRouteResponse',
      new DeleteFarmRouteRequest(id)
    ).pipe(
      filter(resp => resp.id === id),
      first(),
      map(resp => resp.id),
    );
  }

  editEntity(id: number, source: number, target: number, troops: any, timerInterval: number): Observable<FarmRoute> {
    return this.websocketService.observable(
      'EditFarmRouteResponse',
      new EditFarmRouteRequest(id, source, target, troops, timerInterval)
    ).pipe(first());
  }

  setTaskEnabled(id: number, enabled: boolean): Observable<FarmTaskEnabled> {
    return this.websocketService.observable(
      'FarmRouteSetEnabledResponse',
      new FarmRouteSetEnabledRequest(id, enabled)
    ).pipe(
      filter(resp => resp.id === id),
      first()
    );
  }
}

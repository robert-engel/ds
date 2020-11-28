import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Observable} from 'rxjs';
import {ResourceMoverConfig} from './structures/resource-mover-config';
import {GetConfigRequest} from './packet/get-config-request';
import {SetEnabledRequest} from './packet/set-enabled-request';
import {map, takeUntil} from 'rxjs/operators';
import {EditResmoverConfigRequest} from './packet/edit-resmover-config-request';

@Injectable({
  providedIn: 'root'
})
export class ResmoverService {

  constructor(private websocketService: WebsocketService) {
  }

  config(unsub$: Observable<void>): Observable<ResourceMoverConfig> {
    return this.websocketService
    .observable('ResourceMoverConfigResponse', new GetConfigRequest())
    .pipe(
      takeUntil(unsub$),
      map(config => {
        return {
          maxDistance: config.maxDistance,
          interval: config.interval,
          maxResources: config.maxResources,
          enabled: config.enabled,
          minResources: {
            iron: config.minResources.value.iron,
            stone: config.minResources.value.stone,
            wood: config.minResources.value.wood,
          },
        };
      })
    );
  }

  setEnabled(enabled: boolean): void {
    this.websocketService.sendData(new SetEnabledRequest(enabled));
  }

  editConfig(
    pWood: number,
    pStone: number,
    pIron: number,
    interval: number,
    maxResources: number,
    maxDistance: number,
  ): void {
    this.websocketService.sendData(new EditResmoverConfigRequest(
      {
        wood: pWood,
        stone: pStone,
        iron: pIron,
      },
      maxResources,
      interval,
      maxDistance,
    ));
  }
}

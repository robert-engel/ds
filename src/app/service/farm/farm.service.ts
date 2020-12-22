import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Observable} from 'rxjs';
import {FarmTaskEntity} from './structures/farm-task-entity';
import {AddFarmEntityRequest} from './packet/add-farm-entity-request';
import {DeleteFarmEntityRequest} from './packet/delete-farm-entity-request';
import {EditFarmEntityRequest} from './packet/edit-farm-entity-request';
import {FarmEntityAddVillageRequest} from './packet/farm-entity-add-village-request';
import {FarmEntityRemoveVillageRequest} from './packet/farm-entity-remove-village-request';
import {FarmTaskVillage} from './structures/farm-task-village';
import {FarmTaskEnabled} from './structures/farm-task-enabled';
import {FarmEntitySetEnabledRequest} from './packet/farm-entity-set-enabled-request';
import {FarmerSetEnabledRequest} from './packet/farmer-set-enabled-request';
import {FarmerConfig} from './structures/farmer-config';
import {GetFarmerConfigRequest} from './packet/get-farmer-config-request';
import {ListFarmEntityRequest} from './packet/list-farm-entity-request';
import {FarmerSetMaxIncsRequest} from './packet/farmer-set-max-incs-request';
import {filter, first, map, takeUntil} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  constructor(private websocketService: WebsocketService) {
  }

  list(unsub: Observable<void>): Observable<FarmTaskEntity[]> {
    return this.websocketService.observable(
      'ListFarmEntityResponse',
      new ListFarmEntityRequest()
    ).pipe(takeUntil(unsub));
  }

  addEntity(farmGroup: string, units: any, timerInterval: number, maxDistance: number): Observable<FarmTaskEntity> {
    return this.websocketService.observable(
      'AddFarmEntityResponse',
      new AddFarmEntityRequest(farmGroup, units, timerInterval, maxDistance)
    ).pipe(first());
  }

  deleteEntity(id: number): Observable<number> {
    return this.websocketService.observable(
      'DeleteFarmEntityResponse',
      new DeleteFarmEntityRequest(id)
    ).pipe(
      filter(resp => resp.id === id),
      first(),
      map(resp => resp.id),
    );
  }

  editEntity(id: number, farmGroup: string, units: any, timerInterval: number, maxDistance: number): Observable<FarmTaskEntity> {
    return this.websocketService.observable(
      'EditFarmEntityResponse',
      new EditFarmEntityRequest(id, farmGroup, units, timerInterval, maxDistance)
    ).pipe(
      filter(resp => resp.id === id),
      first()
    );
  }

  addVillage(id: number, village: number): Observable<FarmTaskVillage> {
    return this.websocketService.observable(
      'FarmEntityAddVillageResponse',
      new FarmEntityAddVillageRequest(id, village)
    ).pipe(
      filter(resp => resp.id === id && resp.village.id === village),
      first()
    );
  }

  removeVillage(id: number, village: number): Observable<FarmTaskVillage> {
    return this.websocketService.observable(
      'FarmEntityRemoveVillageResponse',
      new FarmEntityRemoveVillageRequest(id, village)
    ).pipe(
      filter(resp => resp.id === id && resp.village.id === village),
      first()
    );
  }

  setTaskEnabled(id: number, enabled: boolean): Observable<FarmTaskEnabled> {
    return this.websocketService.observable(
      'FarmEntitySetEnabledResponse',
      new FarmEntitySetEnabledRequest(id, enabled)
    ).pipe(
      filter(resp => resp.id === id),
      first()
    );
  }

  config(unsub: Observable<void>): Observable<FarmerConfig> {
    return this.websocketService.observable(
      'FarmerConfigResponse',
      new GetFarmerConfigRequest()
    ).pipe(takeUntil(unsub));
  }

  setEnabled(enabled: boolean): void {
    this.websocketService.sendData(new FarmerSetEnabledRequest(enabled));
  }

  setMaxIncs(max: number): void {
    this.websocketService.sendData(new FarmerSetMaxIncsRequest(max));
  }
}

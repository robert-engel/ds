import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Observable} from 'rxjs';
import {AutoCatapultConfig} from './structure/auto-catapult-config';
import {BabaPruneConfigRequest} from './packet/baba-prune-config-request';
import {first, map, takeUntil} from 'rxjs/operators';
import {AutoCatapultVillageGroup} from './structure/auto-catapult-village-group';
import {Village} from '../structures/village';
import {BabaPruneCreateGroupRequest} from './packet/baba-prune-create-group-request';
import {BabaPruneAddVillageRequest} from './packet/baba-prune-add-village-request';
import {BabaPruneRemoveVillageRequest} from './packet/baba-prune-remove-village-request';
import {BabaPruneEditGroupRequest} from './packet/baba-prune-edit-group-request';
import {BabaPruneDeleteGroupRequest} from './packet/baba-prune-delete-group-request';
import {BabaPruneSetEnabledRequest} from './packet/baba-prune-set-enabled-request';
import {BabaInformation} from './structure/baba-information';
import {GetBabaInfoRequest} from './packet/get-baba-info-request';
import {BuildingTask} from '../auto-builder/structure/building-task';
import {BabaPruneSetReductionsRequest} from './packet/baba-prune-set-reductions-request';
import {BabaPruneMassAddVillageRequest} from './packet/baba-prune-mass-add-village-request';
import {BabaPruneMassRemoveVillageRequest} from './packet/baba-prune-mass-remove-village-request';
import {DeleteBabaInfoRequest} from './packet/delete-baba-info-request';

@Injectable({
  providedIn: 'root'
})
export class CatapultService {

  constructor(private websocket: WebsocketService) {
  }

  getBabaInfo(
    pFirst: number,
    pMax: number,
    pSort = '',
    pSortOrder = 'asc',
  ): Observable<{ count: number; list: BabaInformation[] }> {
    const req = new GetBabaInfoRequest(
      pMax,
      pFirst,
      pSort,
      pSortOrder,
    );
    return this.websocket.observable('BabaInformationListResponse', req)
    .pipe(first(resp => resp.id === req.id));
  }

  getConfig(unsub: Observable<void>): Observable<AutoCatapultConfig> {
    return this.websocket.observable(
      'BabaPruneConfigResponse',
      new BabaPruneConfigRequest()
    ).pipe(takeUntil(unsub));
  }

  deleteInfo(id: number): void {
    this.websocket.sendData(new DeleteBabaInfoRequest(id));
  }

  groupCreatedEvent(unsub: Observable<void>): Observable<AutoCatapultVillageGroup> {
    return this.websocket.observable('BabaPruneGroupCreatedEvent').pipe(takeUntil(unsub));
  }

  groupEditedEvent(unsub: Observable<void>): Observable<AutoCatapultVillageGroup> {
    return this.websocket.observable('BabaPruneGroupEditEvent').pipe(takeUntil(unsub));
  }

  groupDeletedEvent(unsub: Observable<void>): Observable<number> {
    return this.websocket.observable('BabaPruneGroupDeletedEvent').pipe(takeUntil(unsub), map(resp => resp.id));
  }

  villageAddedEvent(unsub: Observable<void>): Observable<{ group: number; villages: Village[] }> {
    return this.websocket.observable('BabaPruneVillageAddedEvent').pipe(takeUntil(unsub));
  }

  villageRemovedEvent(unsub: Observable<void>): Observable<{ group: number; villages: number[] }> {
    return this.websocket.observable('BabaPruneVillageRemovedEvent').pipe(takeUntil(unsub));
  }

  setEnabled(enabled: boolean): void {
    this.websocket.sendData(new BabaPruneSetEnabledRequest(enabled));
  }

  setReductions(reductions: BuildingTask[]): void {
    this.websocket.sendData(new BabaPruneSetReductionsRequest(reductions));
  }

  createGroup(range: number, amount: string): void {
    this.websocket.sendData(new BabaPruneCreateGroupRequest(range, amount));
  }

  editGroup(id: number, enabled: boolean, range: number, amount: string, coordX: number, coordY: number): void {
    this.websocket.sendData(new BabaPruneEditGroupRequest(id, enabled, range, amount, coordX, coordY));
  }

  deleteGroup(group: number): void {
    this.websocket.sendData(new BabaPruneDeleteGroupRequest(group));
  }

  addVillage(group: number, village: number): void {
    this.websocket.sendData(new BabaPruneAddVillageRequest(group, village));
  }

  removeVillage(group: number, village: number): void {
    this.websocket.sendData(new BabaPruneRemoveVillageRequest(group, village));
  }

  addVillages(group: number, villages: string): void {
    this.websocket.sendData(new BabaPruneMassAddVillageRequest(group, villages));
  }

  removeVillages(group: number, villages: string): void {
    this.websocket.sendData(new BabaPruneMassRemoveVillageRequest(group, villages));
  }
}

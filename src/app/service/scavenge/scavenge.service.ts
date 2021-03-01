import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Observable} from 'rxjs';
import {ScavengeTask} from './structures/scavenge-task';
import {first, map, takeUntil} from 'rxjs/operators';
import {Village} from '../structures/village';
import {TroopTemplate} from '../structures/troop-template';
import {ScavengeTaskAddRequest} from './packet/scavenge-task-add-request';
import {ScavengeTaskMassVillageAddRequest} from './packet/scavenge-task-mass-village-add-request';
import {ScavengeTaskMassVillageRemoveRequest} from './packet/scavenge-task-mass-village-remove-request';
import {ScavengeTaskRemoveRequest} from './packet/scavenge-task-remove-request';
import {ScavengeTaskVillageAddRequest} from './packet/scavenge-task-village-add-request';
import {ScavengeTaskVillageRemoveRequest} from './packet/scavenge-task-village-remove-request';
import {ScavengeTaskEditRequest} from './packet/scavenge-task-edit-request';
import {ScavengeTaskListRequest} from './packet/scavenge-task-list-request';
import {ScavengeTaskEnableRequest} from './packet/scavenge-task-enable-request';
import {ScavengeTaskIsEnabledRequest} from './packet/scavenge-task-is-enabled-request';

@Injectable({
  providedIn: 'root'
})
export class ScavengeService {

  constructor(private web: WebsocketService) {
  }

  listTasks(): Observable<ScavengeTask[]> {
    return this.web.observable('ScavengeTasksResponse', new ScavengeTaskListRequest())
    .pipe(first());
  }

  setEnabled(enabled: boolean): void {
    this.web.sendData(new ScavengeTaskEnableRequest(enabled));
  }

  enableEvent(unsub: Observable<void>): Observable<boolean> {
    return this.web.observable('ScavengeEnabledResponse', new ScavengeTaskIsEnabledRequest())
    .pipe(takeUntil(unsub), map(resp => resp.enabled));
  }

  taskAddedEvent(unsub: Observable<void>): Observable<ScavengeTask> {
    return this.web.observable('ScavengeTaskAddedEvent')
    .pipe(takeUntil(unsub));
  }

  taskEditEvent(unsub: Observable<void>): Observable<ScavengeTask> {
    return this.web.observable('ScavengeTaskEditedEvent')
    .pipe(takeUntil(unsub));
  }

  taskRemovedEvent(unsub: Observable<void>): Observable<number> {
    return this.web.observable('ScavengeTaskRemovedEvent')
    .pipe(takeUntil(unsub), map(resp => resp.id));
  }

  villageAddedEvent(unsub: Observable<void>): Observable<{ id: number, villages: Village[] }> {
    return this.web.observable('ScavengeTaskVillageAddedEvent')
    .pipe(takeUntil(unsub));
  }

  villageRemovedEvent(unsub: Observable<void>): Observable<{ id: number, villages: number[] }> {
    return this.web.observable('ScavengeTaskVillageRemovedEvent')
    .pipe(takeUntil(unsub));
  }

  addTask(troops: TroopTemplate): void {
    this.web.sendData(new ScavengeTaskAddRequest(troops));
  }

  editTask(id: number, troops: TroopTemplate): void {
    this.web.sendData(new ScavengeTaskEditRequest(id, troops));
  }

  removeTask(id: number): void {
    this.web.sendData(new ScavengeTaskRemoveRequest(id));
  }

  addVillage(id: number, village: number): void {
    this.web.sendData(new ScavengeTaskVillageAddRequest(id, village));
  }

  massAddVillage(id: number, villages: string): void {
    this.web.sendData(new ScavengeTaskMassVillageAddRequest(id, villages));
  }

  removeVillage(id: number, village: number): void {
    this.web.sendData(new ScavengeTaskVillageRemoveRequest(id, village));
  }

  massRemoveVillage(id: number, villages: string): void {
    this.web.sendData(new ScavengeTaskMassVillageRemoveRequest(id, villages));
  }
}

import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Observable} from 'rxjs';
import {AutoRecruitConfig} from './structures/auto-recruit-config';
import {AutoRecruitConfigRequest} from './packet/auto-recruit-config-request';
import {map, takeUntil} from 'rxjs/operators';
import {AutoRecruitSetEnabledRequest} from './packet/auto-recruit-set-enabled-request';
import {AutoRecruitTask} from './structures/auto-recruit-task';
import {UnitsHolder} from '../structures/units-holder';
import {AutoRecruitAddTaskRequest} from './packet/auto-recruit-add-task-request';
import {AutoRecruitRemoveTaskRequest} from './packet/auto-recruit-remove-task-request';

@Injectable({
  providedIn: 'root'
})
export class AutoRecruitService {

  constructor(private web: WebsocketService) {
  }

  getConfig(unsub: Observable<void>): Observable<AutoRecruitConfig> {
    return this.web.observable('AutoRecruitConfigResponse', new AutoRecruitConfigRequest())
    .pipe(takeUntil(unsub));
  }

  addEvent(unsub: Observable<void>): Observable<AutoRecruitTask> {
    return this.web.observable('AutoRecruitTaskAddedEvent').pipe(takeUntil(unsub));
  }

  removeEvent(unsub: Observable<void>): Observable<number> {
    return this.web.observable('AutoBuilderBuildRemovedEvent')
    .pipe(takeUntil(unsub), map(resp => resp.id));
  }

  setEnabled(enabled: boolean): void {
    this.web.sendData(new AutoRecruitSetEnabledRequest(enabled));
  }

  addTask(group: number, units: UnitsHolder): void {
    this.web.sendData(new AutoRecruitAddTaskRequest(group, units));
  }

  removeTask(id: number): void {
    this.web.sendData(new AutoRecruitRemoveTaskRequest(id));
  }
}

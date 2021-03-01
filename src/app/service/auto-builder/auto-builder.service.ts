import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Observable} from 'rxjs';
import {AutoBuilderTemplate} from './structure/auto-builder-template';
import {AutoBuilderConfig} from './structure/auto-builder-config';
import {AutoBuilderGetConfigRequest} from './packet/auto-builder-get-config-request';
import {filter, first, map, takeUntil} from 'rxjs/operators';
import {BuildingTask} from './structure/building-task';
import {AutoBuilderAddTemplateRequest} from './packet/auto-builder-add-template-request';
import {AutoBuilderDefaultTemplateRequest} from './packet/auto-builder-default-template-request';
import {AutoBuilderDeleteTemplateRequest} from './packet/auto-builder-delete-template-request';
import {AutoBuilderEnableRequest} from './packet/auto-builder-enable-request';
import {AutoBuilderGetTemplateRequest} from './packet/auto-builder-get-template-request';
import {AutoBuilderSetNewVillageTemplateRequest} from './packet/auto-builder-set-new-village-template-request';
import {AutoBuilderTemplateListRequest} from './packet/auto-builder-template-list-request';
import {AutoBuilderGetBuildingsRequest} from './packet/auto-builder-get-buildings-request';
import {BuildingInfo} from './structure/building-info';
import {AutoBuilderTemplateSummary} from './structure/auto-builder-template-summary';
import {AutoBuilderActiveVillage} from './structure/auto-builder-active-village';
import {AutoBuilderActiveVillagesRequest} from './packet/auto-builder-active-villages-request';
import {AutoBuilderStopBuildRequest} from './packet/auto-builder-stop-build-request';

@Injectable({
  providedIn: 'root'
})
export class AutoBuilderService {

  constructor(private web: WebsocketService) {
  }

  buildScheduledEvent(unsub: Observable<void>): Observable<AutoBuilderActiveVillage> {
    return this.web.observable('AutoBuilderBuildAddedEvent')
    .pipe(takeUntil(unsub));
  }

  buildRemovedEvent(unsub: Observable<void>): Observable<number> {
    return this.web.observable('AutoBuilderBuildRemovedEvent')
    .pipe(takeUntil(unsub), map(resp => resp.village));
  }

  addTemplateEvent(unsub: Observable<void>): Observable<AutoBuilderTemplateSummary> {
    return this.web.observable('AutoBuilderAddTemplateResponse')
    .pipe(takeUntil(unsub));
  }

  deleteTemplateEvent(unsub: Observable<void>): Observable<number> {
    return this.web.observable('AutoBuilderDeleteTemplateResponse')
    .pipe(takeUntil(unsub), map(resp => resp.id));
  }

  stopBuild(village: number): void {
    this.web.sendData(new AutoBuilderStopBuildRequest(village));
  }

  getConfig(unsub: Observable<void>): Observable<AutoBuilderConfig> {
    return this.web.observable('AutoBuilderConfigResponse', new AutoBuilderGetConfigRequest())
    .pipe(takeUntil(unsub));
  }

  addTemplate(name: string, template: BuildingTask[]): void {
    this.web.sendData(new AutoBuilderAddTemplateRequest(name, template));
  }

  getDefaultTemplate(): Observable<AutoBuilderTemplate> {
    return this.web.observable('AutoBuilderTemplateResponse', new AutoBuilderDefaultTemplateRequest())
    .pipe(filter(resp => resp.name === 'Default'), first());
  }

  deleteTemplate(id: number): void {
    this.web.sendData(new AutoBuilderDeleteTemplateRequest(id));
  }

  enable(template: number, village: number): void {
    this.web.sendData(new AutoBuilderEnableRequest(village, template));
  }

  getTemplate(id: number): Observable<AutoBuilderTemplate> {
    return this.web.observable('AutoBuilderTemplateResponse', new AutoBuilderGetTemplateRequest(id))
    .pipe(filter(resp => resp.id === id), first());
  }

  setNewVillageTemplate(id: number): void {
    this.web.sendData(new AutoBuilderSetNewVillageTemplateRequest(id));
  }

  getActiveVillages(template: number): Observable<AutoBuilderActiveVillage[]> {
    const req = new AutoBuilderActiveVillagesRequest(template);
    return this.web.observable('AutoBuilderActiveVillagesResponse', req)
    .pipe(first());
  }

  getTemplates(): Observable<AutoBuilderTemplateSummary[]> {
    return this.web.observable('AutoBuilderTemplateListResponse', new AutoBuilderTemplateListRequest())
    .pipe(first());
  }

  getBuildings(): Observable<{ [building: string]: BuildingInfo }> {
    return this.web.observable('AutoBuilderBuildingsResponse', new AutoBuilderGetBuildingsRequest())
    .pipe(first());
  }
}

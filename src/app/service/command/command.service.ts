import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Observable, Subject} from 'rxjs';
import {CommandTask} from '../structures/command-task';
import {filter, first, map, shareReplay} from 'rxjs/operators';
import {CommandListResponse} from '../structures/command-list-response';
import {CommandListRequest} from './packet/command-list-request';
import {CommandEditTimes} from '../structures/command-edit-times';
import {GetCommandEditTimesRequest} from './packet/get-command-edit-times-request';
import {SimpleTimerRequest} from './packet/simple-timer-request';
import {ImportWorkbenchRequest} from './packet/import-workbench-request';
import {AddCommandRequest} from './packet/add-command-request';
import {CommandType} from '../structures/command-type';
import {DeleteCommandRequest} from './packet/delete-command-request';
import {EditCommandSourceRequest} from './packet/edit-command-source-request';
import {EditCommandTargetRequest} from './packet/edit-command-target-request';
import {EditSlowestUnitRequest} from './packet/edit-slowest-unit-request';
import {EditCommandTypeRequest} from './packet/edit-command-type-request';
import {EditCommandArrivalTimeRequest} from './packet/edit-command-arrival-time-request';
import {EditCommandSendTimeRequest} from './packet/edit-command-send-time-request';
import {EditCommandTroopsRequest} from './packet/edit-command-troops-request';
import {StandardTroopTemplate} from '../structures/standard-troop-template';
import {GetStandardTemplateListRequest} from './packet/get-standard-template-list-request';
import {GetStandardTroopTemplateRequest} from './packet/get-standard-troop-template-request';
import {AddStandardTroopTemplateRequest} from './packet/add-standard-troop-template-request';
import {EditStandardTroopTemplateRequest} from './packet/edit-standard-troop-template-request';
import {DeleteStandardTroopTemplateRequest} from './packet/delete-standard-troop-template-request';
import {ExportWorkbenchRequest} from './packet/export-workbench-request';
import {ImportWorkbenchFinish} from '../structures/import-workbench-finish';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  editTaskObservable: Observable<CommandTask>;
  editTaskSubject: Subject<CommandTask> = new Subject<CommandTask>();

  constructor(private websocket: WebsocketService) {
    this.editTaskObservable = this.editTaskSubject
    .asObservable()
    .pipe(shareReplay(1));
    this.editTaskObservable.subscribe();
    this.editTaskSubject.next(undefined);
  }

  importWorkbenchStart(): Observable<number> {
    return this.websocket.observable('ImportWorkbenchStartEvent')
    .pipe(map(resp => resp.id));
  }

  importWorkbenchProgress(): Observable<any> {
    return this.websocket.observable('ImportWorkbenchProgressEvent');
  }

  importWorkbenchFinish(): Observable<ImportWorkbenchFinish> {
    return this.websocket.observable('ImportWorkbenchFinishEvent');
  }

  getEditTask(): Observable<CommandTask> {
    return this.editTaskObservable;
  }

  setEditTask(task: CommandTask): void {
    this.editTaskSubject.next(task);
  }

  getTroopTemplates(): Observable<StandardTroopTemplate[]> {
    return this.websocket.observable('StandardTroopTemplateListResponse', new GetStandardTemplateListRequest())
    .pipe(first(), map(resp => resp.templates));
  }

  getTroopTemplate(id: number): Observable<StandardTroopTemplate> {
    return this.websocket.observable('StandardTroopTemplateResponse', new GetStandardTroopTemplateRequest(id))
    .pipe(filter(resp => resp.id === id), first());
  }

  addTroopTemplate(name: string, troops: any): Observable<StandardTroopTemplate> {
    return this.websocket.observable('StandardTroopTemplateResponse', new AddStandardTroopTemplateRequest(name, troops))
    .pipe(first());
  }

  editTroopTemplate(id: number, name: string, troops: any): Observable<StandardTroopTemplate> {
    return this.websocket.observable('StandardTroopTemplateResponse', new EditStandardTroopTemplateRequest(id, name, troops))
    .pipe(filter(resp => resp.id === id), first());
  }

  deleteTroopTemplate(id: number): void {
    this.websocket.sendData(new DeleteStandardTroopTemplateRequest(id));
  }

  exportWorkbench(): Observable<string> {
    return this.websocket.observable('WorkbenchExportResponse', new ExportWorkbenchRequest())
    .pipe(first(), map(resp => resp.export));
  }

  addCommandEvents(): Observable<CommandTask> {
    return this.websocket.observable('AddCommandEvent');
  }

  editCommandsEvents(): Observable<CommandTask> {
    return this.websocket.observable('EditCommandEvent');
  }

  removeCommandEvents(): Observable<number> {
    return this.websocket.observable('RemoveCommandEvent').pipe(map(data => data.id));
  }

  simpleTimer(time: string): void {
    this.websocket.sendData(new SimpleTimerRequest(time));
  }

  importWorkbench(plan: string): number {
    const req = new ImportWorkbenchRequest(plan);
    this.websocket.sendData(req);
    return req.id;
  }

  getCommandList(max: number, firstTask: number): Observable<CommandListResponse> {
    const req = new CommandListRequest(max, firstTask);
    return this.websocket.observable('CommandListResponse', req).pipe(filter(resp => resp.id === req.id), first());
  }

  getEditTimes(id: number): Observable<CommandEditTimes> {
    const req = new GetCommandEditTimesRequest(id);
    return this.websocket.observable('CommandEditTimesResponse', req).pipe(filter(resp => resp.id === id), first());
  }

  addCommand(source: number, target: number, slowestUnit: number, commandType: CommandType, arrival: number, template: number,
             troops: object): void {
    this.websocket.sendData(new AddCommandRequest(source, target, slowestUnit, commandType, arrival, template, troops));
  }

  removeCommand(id: number): void {
    this.websocket.sendData(new DeleteCommandRequest(id));
  }

  editSource(id: number, source: number): void {
    this.websocket.sendData(new EditCommandSourceRequest(id, source));
  }

  editTarget(id: number, target: number): void {
    this.websocket.sendData(new EditCommandTargetRequest(id, target));
  }

  editSlowestUnit(id: number, slowest: string): void {
    this.websocket.sendData(new EditSlowestUnitRequest(id, slowest));
  }

  editCommandType(id: number, type: CommandType): void {
    this.websocket.sendData(new EditCommandTypeRequest(id, type));
  }

  editArrival(id: number, arrival: number): void {
    this.websocket.sendData(new EditCommandArrivalTimeRequest(id, arrival));
  }

  editSendTime(id: number, sendTime: number): void {
    this.websocket.sendData(new EditCommandSendTimeRequest(id, sendTime));
  }

  editTroops(id: number, template: number, troops: object): void {
    this.websocket.sendData(new EditCommandTroopsRequest(id, template, troops));
  }
}

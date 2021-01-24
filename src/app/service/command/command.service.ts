import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Observable} from 'rxjs';
import {CommandTask} from '../structures/command-task';
import {filter, first, map, takeUntil} from 'rxjs/operators';
import {CommandListResponse} from '../structures/command-list-response';
import {CommandListRequest} from './packet/command-list-request';
import {CommandEditTimes} from '../structures/command-edit-times';
import {GetCommandEditTimesRequest} from './packet/get-command-edit-times-request';
import {SimpleTimerRequest} from './packet/simple-timer-request';
import {ImportWorkbenchRequest} from './packet/import-workbench-request';
import {AddCommandRequest} from './packet/add-command-request';
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
import {TimerLogicResponse} from './structures/timer-logic-response';
import {GetTimerLogicRequest} from './packet/get-timer-logic-request';
import {SetTimerLogicRequest} from './packet/set-timer-logic-request';
import {CancelTabberRequest} from './packet/cancel-tabber-request';
import {PlannedCancelTab} from './structures/planned-cancel-tab';
import {GetPlannedCancelTabsRequest} from './packet/get-planned-cancel-tabs-request';
import {CancelPlannedTabRequest} from './packet/cancel-planned-tab-request';
import {EditCommandTimerRequest} from './packet/edit-command-timer-request';
import {MultiAddResponse} from './structures/multi-add-response';
import {MultiAddCommandRequest} from './packet/multi-add-command-request';
import {MultiEditCommandTimeAddRequest} from './packet/multi/multi-edit-command-time-add-request';
import {MultiEditCommandMillisRandomRequest} from './packet/multi/multi-edit-command-millis-random-request';
import {MultiEditCommandMillisSetRequest} from './packet/multi/multi-edit-command-millis-set-request';
import {MultiEditCommandTimerRequest} from './packet/multi/multi-edit-command-timer-request';
import {MultiEditCommandTroopsRequest} from './packet/multi/multi-edit-command-troops-request';
import {MultiEditCommandTypeRequest} from './packet/multi/multi-edit-command-type-request';
import {MultiEditCommandUnitRequest} from './packet/multi/multi-edit-command-unit-request';
import {MultiEditResponse} from './structures/multi-edit-response';
import {CommandType} from './structures/command-type';
import {CommandListTypesRequest} from './packet/command-list-types-request';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private websocket: WebsocketService) {
  }

  multiEditEvents(until: Observable<void>): Observable<MultiEditResponse> {
    return this.websocket.observable('MultiEditCommandResponse').pipe(takeUntil(until));
  }

  addMillis(ids: number[], plus: number, unit: string): void {
    this.websocket.sendData(new MultiEditCommandTimeAddRequest(ids, plus, unit));
  }

  randomizeMillis(ids: number[], min: number, max: number): void {
    this.websocket.sendData(new MultiEditCommandMillisRandomRequest(ids, min, max));
  }

  setMillis(ids: number[], ms: number): void {
    this.websocket.sendData(new MultiEditCommandMillisSetRequest(ids, ms));
  }

  multiEditTimer(ids: number[], timer: string): void {
    this.websocket.sendData(new MultiEditCommandTimerRequest(ids, timer));
  }

  multiEditTroops(ids: number[], template: number, troops: object): void {
    this.websocket.sendData(new MultiEditCommandTroopsRequest(ids, template, troops));
  }

  multiEditType(ids: number[], type: CommandType): void {
    this.websocket.sendData(new MultiEditCommandTypeRequest(ids, type));
  }

  multiEditUnit(ids: number[], unit: string): void {
    this.websocket.sendData(new MultiEditCommandUnitRequest(ids, unit));
  }

  setOverviewRemove(should: boolean): void {
    localStorage.setItem('tw.interface.command.overview.remove', String(should));
  }

  shouldOverviewRemove(): boolean {
    return localStorage.getItem('tw.interface.command.overview.remove') === 'true';
  }

  cancelTab(village: number, troops: any, second: number, msStart: number, msEnd: number): void {
    this.websocket.sendData(new CancelTabberRequest(village, troops, second, msStart, msEnd));
  }

  getCancelTabs(): Observable<PlannedCancelTab[]> {
    return this.websocket.observable('ListPlannedCancelTabsResponse', new GetPlannedCancelTabsRequest());
  }

  cancelPlannedCancelTab(id: number): void {
    this.websocket.sendData(new CancelPlannedTabRequest(id));
  }

  addedPlansEvents(): Observable<PlannedCancelTab> {
    return this.websocket.observable('AddedPlannedTabPacket');
  }

  cancelPlansEvents(): Observable<number> {
    return this.websocket.observable('CanceledPlannedTabPacket')
    .pipe(map(resp => resp.id));
  }

  getTimerLogic(): Observable<TimerLogicResponse> {
    return this.websocket.observable('TimerLogicResponse', new GetTimerLogicRequest());
  }

  setTimerLogic(logic: string): void {
    this.websocket.sendData(new SetTimerLogicRequest(logic));
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

  multiAddCommandEvents(): Observable<MultiAddResponse> {
    return this.websocket.observable('MultiAddCommandEvent');
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

  importWorkbench(plan: string, cataTarget: string, ms: number | undefined): number {
    const req = new ImportWorkbenchRequest(plan, cataTarget, ms);
    this.websocket.sendData(req);
    return req.id;
  }

  getCommandTypes(): Observable<CommandType[]> {
    return this.websocket.observable('CommandListTypesResponse', new CommandListTypesRequest()).pipe(first());
  }

  getCommandList(
    max: number,
    firstTask: number,
    origin: number | undefined,
    target: number | undefined,
    type: string | undefined,
    unit: string | undefined
  ): Observable<CommandListResponse> {
    const req = new CommandListRequest(max, firstTask, origin, target, type, unit);
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

  addCommands(
    sources: number[],
    target: number,
    slowestUnit: number,
    commandType: CommandType,
    arrival: number,
    template: number,
    troops: object
  ): void {
    this.websocket.sendData(new MultiAddCommandRequest(sources, target, slowestUnit, commandType, arrival, template, troops));
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

  editTimer(id: number, timer: string): void {
    this.websocket.sendData(new EditCommandTimerRequest(id, timer));
  }

  editSendTime(id: number, sendTime: number): void {
    this.websocket.sendData(new EditCommandSendTimeRequest(id, sendTime));
  }

  editTroops(id: number, template: number, troops: object): void {
    this.websocket.sendData(new EditCommandTroopsRequest(id, template, troops));
  }
}

import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Observable} from 'rxjs';
import {AllTasks} from '../structures/all-tasks';
import {RequestAllTasks} from './packet/request-all-tasks';
import {Task} from '../structures/task';

@Injectable({
  providedIn: 'root'
})
export class TaskmanagerService {

  constructor(private websocketService: WebsocketService) {
  }

  allTasks(): Observable<AllTasks> {
    return this.websocketService.observable('AllTasksResponse', new RequestAllTasks());
  }

  addTask(): Observable<Task> {
    return this.websocketService.observable('AddTaskEvent');
  }

  cancelTask(): Observable<Task> {
    return this.websocketService.observable('CancelTaskEvent');
  }

  finishTask(): Observable<Task> {
    return this.websocketService.observable('FinishedTaskEvent');
  }
}

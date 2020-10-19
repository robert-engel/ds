import {CommandTask} from './command-task';

export interface CommandListResponse {
  id: number;
  count: number;
  tasks: CommandTask[];
}

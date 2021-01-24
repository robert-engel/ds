import {Village} from './village';
import {LocalDateTime} from './local-date-time';
import {CommandType} from '../command/structures/command-type';

export interface CommandTask {
  id: number;
  from: Village;
  to: Village;
  units: object;
  sendTime: LocalDateTime;
  arrivalTime: LocalDateTime;
  commandType: CommandType;
  timer: string;
  unit: string;
  remainingDelay: number;
}

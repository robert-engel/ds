import {Village} from './village';
import {CommandType} from './command-type';
import {LocalDateTime} from './local-date-time';

export interface CommandTask {
  id: number;
  from: Village;
  to: Village;
  units: object;
  sendTime: LocalDateTime;
  arrivalTime: LocalDateTime;
  commandType: CommandType;
  unit: string;
  remainingDelay: number;
}

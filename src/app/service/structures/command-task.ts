import {Village} from './village';
import {CommandType} from './command-type';

export interface CommandTask {
  id: number;
  from: Village;
  to: Village;
  units: object;
  sendTime: string;
  arrivalTime: string;
  commandType: CommandType;
  unit: string;
  remainingDelay: number;
}

import {Village} from '../../structures/village';
import {CommandType} from './command-type';

export interface ScheduleData {
  sources: Village[];
  target: Village[];
  unit: string;
  type: CommandType;
  time: number;
}

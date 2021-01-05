import {Village} from '../../structures/village';

export interface ScheduleData {
  sources: Village[];
  target: Village[];
  unit: string;
  type: string;
  time: number;
}

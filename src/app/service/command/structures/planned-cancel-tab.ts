import {Village} from '../../structures/village';

export interface PlannedCancelTab {
  id: number;
  village: Village;
  time: string;
  startMs: number;
  endMs: number;
}

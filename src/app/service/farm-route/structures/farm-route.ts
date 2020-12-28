import {Village} from '../../structures/village';

export interface FarmRoute {
  id: number;
  source: Village;
  target: Village;
  troops: any;
  timerInterval: number;
  enabled: boolean;
}

import {Village} from '../../structures/village';

export interface FarmTaskEntity {
  id: number;
  villages: Village[];
  farmGroup: string;
  units: any;
  timerInterval: number;
  enabled: boolean;
  maxDistance: number;
}

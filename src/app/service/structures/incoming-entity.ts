import {Village} from './village';
import {Player} from './player';

export interface IncomingEntity {
  id: number;
  name: string;
  canceled: boolean;
  slowestUnit: string;
  target: Village;
  origin: Village;
  player: Player;
  arrival: string;
  return: string;
}

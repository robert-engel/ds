import {Village} from './village';
import {Player} from './player';

export interface IncomingEntity {
  remaining: number;
  id: number;
  name: string;
  canceled: boolean;
  slowestUnit: string;
  target: Village;
  origin: Village;
  player: Player;
  arrival: string;
  time: number;
  returnTime: number;
  return: string;
}

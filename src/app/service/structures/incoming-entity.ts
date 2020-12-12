import {Village} from './village';
import {Player} from './player';
import {LocalDateTime} from './local-date-time';

export interface IncomingEntity {
  remaining: number;
  id: number;
  name: string;
  canceled: boolean;
  slowestUnit: string;
  target: Village;
  origin: Village;
  player: Player;
  arrival: LocalDateTime;
  return: LocalDateTime;
}

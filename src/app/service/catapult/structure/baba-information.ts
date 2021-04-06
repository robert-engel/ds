import {BattleReport} from './battle-report';
import {LocalDateTime} from '../../structures/local-date-time';

export interface BabaInformation {
  id: number;
  report: BattleReport | undefined;
  points: number;
  nextActionTime: LocalDateTime;
  nextAction: string;
}

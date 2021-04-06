import {LocalDateTime} from '../../structures/local-date-time';
import {Player} from '../../structures/player';
import {Village} from '../../structures/village';
import {UnitsHolder} from '../../structures/units-holder';

export interface BattleReport {
  reportId: number;
  dot: string;
  reportTime: LocalDateTime;
  attacker: Player | undefined;
  attackerVillage: Village;
  attackerUnits: UnitsHolder;
  attackerUnitsLost: UnitsHolder;
  defender: Player | undefined;
  defenderVillage: Village;
  defenderUnits: UnitsHolder | undefined;
  defenderUnitsLost: UnitsHolder | undefined;
  buildings: string | undefined;
}

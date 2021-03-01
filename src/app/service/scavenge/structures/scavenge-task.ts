import {TroopTemplate} from '../../structures/troop-template';
import {Village} from '../../structures/village';

export interface ScavengeTask {
  id: number;
  troops: TroopTemplate;
  villages: Village[];
}

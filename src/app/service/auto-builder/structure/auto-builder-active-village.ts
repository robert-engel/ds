import {Village} from '../../structures/village';

export interface AutoBuilderActiveVillage {
  village: Village;
  nextExecution: string;
  remaining: number;
}

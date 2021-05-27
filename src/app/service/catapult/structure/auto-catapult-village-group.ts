import {Village} from '../../structures/village';

export interface AutoCatapultVillageGroup {
  id: number;
  range: number;
  enabled: boolean;
  amount: string;
  villages: Village[];
  coordinateX: number;
  coordinateY: number;
}

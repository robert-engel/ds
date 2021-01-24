import {DefenseAmount} from './defense-amount';

export interface AutoDefenderConfig {
  enabled: { [feature: string]: boolean; };
  block: { [feature: string]: { [size: string]: DefenseAmount; }; };
}

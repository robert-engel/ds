import {Village} from './village';

export interface CommandPlannerPossibility {
  village: Village;
  units: any;
  available: any;
  remaining: any;
  distance: number;
  alreadyPlanned: number;
}

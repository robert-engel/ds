import {AutoCatapultVillageGroup} from './auto-catapult-village-group';
import {BuildingTask} from '../../auto-builder/structure/building-task';

export interface AutoCatapultConfig {
  entities: { [id: number]: AutoCatapultVillageGroup };
  enabled: boolean;
  reductions: BuildingTask[];
}

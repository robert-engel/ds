import {Village} from './village';
import {TargetCount} from './target-count';

export interface FakePlanResult {
  id: number;
  count: TargetCount[];
  plan: PlannedFake[];
}

export interface PlannedFake {
  source: Village;
  target: Village;
  arrival: string;
  sendTime: string;
}

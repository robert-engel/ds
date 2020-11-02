import {IncomingEntity} from './incoming-entity';

export interface IncListResponse {
  id: number;
  count: number;
  incs: IncomingEntity[];
}

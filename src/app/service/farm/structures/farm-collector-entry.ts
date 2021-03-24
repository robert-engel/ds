import {Village} from '../../structures/village';
import {LocalDateTime} from '../../structures/local-date-time';

export interface FarmCollectorEntry {
  village: Village;
  time: LocalDateTime;
}

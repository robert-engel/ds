import {Packet} from '../../packet/packet';

export class FarmCollectorTimesRequest implements Packet {
  getName(): string {
    return 'FarmTroopCollectorTimesRequest';
  }
}

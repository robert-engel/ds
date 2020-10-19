import {Packet} from '../../packet/packet';

export class GetIgnoredVillagesRequest implements Packet {
  getName(): string {
    return 'GetIgnoredVillagesRequest';
  }
}

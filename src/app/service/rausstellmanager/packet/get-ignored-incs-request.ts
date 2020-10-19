import {Packet} from '../../packet/packet';

export class GetIgnoredIncsRequest implements Packet {
  getName(): string {
    return 'GetIgnoredIncsRequest';
  }
}

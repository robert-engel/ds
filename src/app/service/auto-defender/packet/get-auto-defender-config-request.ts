import {Packet} from '../../packet/packet';

export class GetAutoDefenderConfigRequest implements Packet {
  getName(): string {
    return 'GetAutoDefenderConfigRequest';
  }
}

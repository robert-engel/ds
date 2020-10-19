import {Packet} from '../../packet/packet';

export class DisableRausstellManagerPacket implements Packet {
  getName(): string {
    return 'DisableRausstellManagerPacket';
  }
}

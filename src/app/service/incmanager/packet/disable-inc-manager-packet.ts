import {Packet} from '../../packet/packet';

export class DisableIncManagerPacket implements Packet {
  getName(): string {
    return 'DisableIncManagerPacket';
  }
}

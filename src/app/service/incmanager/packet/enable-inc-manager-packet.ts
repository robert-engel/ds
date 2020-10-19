import {Packet} from '../../packet/packet';

export class EnableIncManagerPacket implements Packet {
  getName(): string {
    return 'EnableIncManagerPacket';
  }
}

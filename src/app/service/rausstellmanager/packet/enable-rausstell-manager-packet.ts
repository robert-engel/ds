import {Packet} from '../../packet/packet';

export class EnableRausstellManagerPacket implements Packet {
  getName(): string {
    return 'EnableRausstellManagerPacket';
  }
}

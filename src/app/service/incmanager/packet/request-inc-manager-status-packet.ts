import {Packet} from '../../packet/packet';

export class RequestIncManagerStatusPacket implements Packet {
  getName(): string {
    return 'RequestIncManagerStatusPacket';
  }
}

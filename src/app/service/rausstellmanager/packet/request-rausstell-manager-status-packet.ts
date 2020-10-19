import {Packet} from '../../packet/packet';

export class RequestRausstellManagerStatusPacket implements Packet {
  getName(): string {
    return 'RequestRausstellManagerStatusPacket';
  }
}

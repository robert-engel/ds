import {Packet} from '../../packet/packet';

export class RequestCurrentJob implements Packet {
  getName(): string {
    return 'RequestCurrentJobPacket';
  }
}

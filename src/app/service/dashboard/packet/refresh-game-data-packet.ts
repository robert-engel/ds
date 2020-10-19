import {Packet} from '../../packet/packet';

export class RefreshGameDataPacket implements Packet {
  getName(): string {
    return 'RefreshGameDataPacket';
  }
}

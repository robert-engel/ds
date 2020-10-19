import {Packet} from '../../packet/packet';

export class StopBotPacket implements Packet {
  getName(): string {
    return 'StopBotPacket';
  }
}

import {Packet} from '../../packet/packet';

export class StartBotPacket implements Packet {
  getName(): string {
    return 'StartBotPacket';
  }
}

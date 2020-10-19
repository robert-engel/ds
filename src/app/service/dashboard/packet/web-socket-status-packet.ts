import {Packet} from '../../packet/packet';

export class WebSocketStatusPacket implements Packet {
  getName(): string {
    return 'WebSocketStatusRequest';
  }
}

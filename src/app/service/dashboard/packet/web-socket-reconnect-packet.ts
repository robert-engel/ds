import {Packet} from '../../packet/packet';

export class WebSocketReconnectPacket implements Packet {
  getName(): string {
    return 'ReconnectWebSocketRequest';
  }
}

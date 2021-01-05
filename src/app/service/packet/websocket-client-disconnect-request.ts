import {Packet} from './packet';

export class WebsocketClientDisconnectRequest implements Packet {
  getName(): string {
    return 'WebSocketClientDisconnect';
  }
}

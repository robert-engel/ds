import {Packet} from './packet';

export class WebsocketClientConnectRequest implements Packet {
  getName(): string {
    return 'WebSocketClientConnect';
  }
}

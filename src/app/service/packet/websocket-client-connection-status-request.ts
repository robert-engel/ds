import {Packet} from './packet';

export class WebsocketClientConnectionStatusRequest implements Packet {
  getName(): string {
    return 'GetWebSocketClientConnectionStatus';
  }
}

import {Packet} from './packet';

export class GetWebsocketClientKeyRequest implements Packet {
  getName(): string {
    return 'GetWebSocketClientKey';
  }
}

import {Packet} from './packet';

export class SetWebsocketClientKeyRequest implements Packet {
  getName(): string {
    return 'SetWebSocketClientKey';
  }
}

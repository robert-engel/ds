import {Packet} from '../../packet/packet';

export class RequestIncListPacket implements Packet {

  max: number;
  first: number;

  constructor(max: number, first: number) {
    this.max = max;
    this.first = first;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.incmanager.ws.packet.incoming.RequestIncListPacket';
  }
}

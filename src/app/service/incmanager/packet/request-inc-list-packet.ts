import {Packet} from '../../packet/packet';

export class RequestIncListPacket implements Packet {

  id: number;
  max: number;
  first: number;
  cancelled: boolean;
  units: string[];

  constructor(first: number, max: number, cancelled?: boolean, units?: string[]) {
    this.id = Math.random();
    this.max = max;
    this.first = first;
    this.cancelled = cancelled;
    this.units = units;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.incmanager.ws.packet.incoming.RequestIncListPacket';
  }
}

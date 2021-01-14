import {Packet} from '../../../packet/packet';

export class MultiEditCommandMillisRandomRequest implements Packet {

  ids: number[];
  min: number;
  max: number;

  constructor(ids: number[], min: number, max: number) {
    this.ids = ids;
    this.min = min;
    this.max = max;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.multi.MultiEditCommandMillisRandomRequest';
  }
}

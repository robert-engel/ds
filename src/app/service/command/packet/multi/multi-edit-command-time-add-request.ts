import {Packet} from '../../../packet/packet';

export class MultiEditCommandTimeAddRequest implements Packet {

  ids: number[];
  plus: number;
  unit: string;

  constructor(ids: number[], plus: number, unit: string) {
    this.ids = ids;
    this.plus = plus;
    this.unit = unit;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.multi.MultiEditCommandTimeAddRequest';
  }
}

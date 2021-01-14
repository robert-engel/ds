import {Packet} from '../../../packet/packet';

export class MultiEditCommandTypeRequest implements Packet {

  ids: number[];
  type: string;

  constructor(ids: number[], type: string) {
    this.ids = ids;
    this.type = type;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.multi.MultiEditCommandTypeRequest';
  }
}

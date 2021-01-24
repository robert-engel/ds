import {Packet} from '../../../packet/packet';
import {CommandType} from '../../structures/command-type';

export class MultiEditCommandTypeRequest implements Packet {

  ids: number[];
  type: string;

  constructor(ids: number[], type: CommandType) {
    this.ids = ids;
    this.type = type.name;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.multi.MultiEditCommandTypeRequest';
  }
}

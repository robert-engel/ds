import {Packet} from '../../packet/packet';
import {CommandType} from '../structures/command-type';

export class EditCommandTypeRequest implements Packet {

  id: number;
  type: string;

  constructor(id: number, commandType: CommandType) {
    this.id = id;
    this.type = commandType.name;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandTypeRequest';
  }
}

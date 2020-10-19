import {Packet} from '../../packet/packet';

export class EditCommandSourceRequest implements Packet {

  id: number;
  source: number;

  constructor(id: number, source: number) {
    this.id = id;
    this.source = source;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandSourceRequest';
  }
}

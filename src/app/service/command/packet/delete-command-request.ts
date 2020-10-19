import {Packet} from '../../packet/packet';

export class DeleteCommandRequest implements Packet {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.DeleteCommandRequest';
  }
}

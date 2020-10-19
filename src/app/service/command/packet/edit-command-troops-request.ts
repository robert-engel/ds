import {Packet} from '../../packet/packet';

export class EditCommandTroopsRequest implements Packet {

  id: number;
  template: number;
  troops: object;

  constructor(id: number, template: number, troops: object) {
    this.id = id;
    this.template = template;
    this.troops = troops;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandTroopsRequest';
  }
}

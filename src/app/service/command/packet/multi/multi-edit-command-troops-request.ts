import {Packet} from '../../../packet/packet';

export class MultiEditCommandTroopsRequest implements Packet {

  ids: number[];
  template: number;
  troops: object;

  constructor(ids: number[], template: number, troops: object) {
    this.ids = ids;
    this.template = template;
    this.troops = troops;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.multi.MultiEditCommandTroopsRequest';
  }
}

import {Packet} from '../../packet/packet';

export class AutoBuilderDeleteTemplateRequest implements Packet {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autobuilder.ws.packet.incoming.AutoBuilderDeleteTemplateRequest';
  }
}

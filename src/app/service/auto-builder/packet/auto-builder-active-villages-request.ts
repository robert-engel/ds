import {Packet} from '../../packet/packet';

export class AutoBuilderActiveVillagesRequest implements Packet {

  template: number;

  constructor(template: number) {
    this.template = template;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autobuilder.ws.packet.incoming.AutoBuilderActiveVillagesRequest';
  }
}

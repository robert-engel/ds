import {Packet} from '../../packet/packet';

export class AutoBuilderEnableRequest implements Packet {

  template: number;
  village: number;

  constructor(template: number, village: number) {
    this.template = template;
    this.village = village;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autobuilder.ws.packet.incoming.AutoBuilderEnableRequest';
  }
}

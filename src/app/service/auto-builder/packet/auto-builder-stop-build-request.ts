import {Packet} from '../../packet/packet';

export class AutoBuilderStopBuildRequest implements Packet {

  village: number;

  constructor(village: number) {
    this.village = village;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autobuilder.ws.packet.incoming.AutoBuilderStopBuildRequest';
  }
}

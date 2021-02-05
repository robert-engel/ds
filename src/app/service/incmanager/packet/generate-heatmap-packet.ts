import {Packet} from '../../packet/packet';

export class GenerateHeatmapPacket implements Packet {

  type: string;

  constructor(type: string) {
    this.type = type;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.heatmap.ws.packet.incoming.GenerateHeatmapRequest';
  }
}

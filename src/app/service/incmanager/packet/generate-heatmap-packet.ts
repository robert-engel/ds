import {Packet} from '../../packet/packet';

export class GenerateHeatmapPacket implements Packet {
  getName(): string {
    return 'GenerateHeatmapRequest';
  }
}

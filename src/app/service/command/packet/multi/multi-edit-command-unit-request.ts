import {Packet} from '../../../packet/packet';

export class MultiEditCommandUnitRequest implements Packet {

  ids: number[];
  slowestUnit: string;

  constructor(ids: number[], slowestUnit: string) {
    this.ids = ids;
    this.slowestUnit = slowestUnit;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.multi.MultiEditCommandUnitRequest';
  }
}

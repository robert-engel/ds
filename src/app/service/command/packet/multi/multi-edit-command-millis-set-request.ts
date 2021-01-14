import {Packet} from '../../../packet/packet';

export class MultiEditCommandMillisSetRequest implements Packet {

  ids: number[];
  ms: number;

  constructor(ids: number[], ms: number) {
    this.ids = ids;
    this.ms = ms;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.multi.MultiEditCommandMillisSetRequest';
  }
}

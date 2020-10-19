import {Packet} from '../../packet/packet';

export class CommandListRequest implements Packet {

  id = Math.random();
  max: number;
  first: number;

  constructor(max: number, first: number) {
    this.max = max;
    this.first = first;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.CommandListRequest';
  }
}

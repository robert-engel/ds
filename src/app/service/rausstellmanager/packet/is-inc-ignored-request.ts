import {Packet} from '../../packet/packet';

export class IsIncIgnoredRequest implements Packet {

  id: number;
  inc: number;

  constructor(id: number, inc: number) {
    this.id = id;
    this.inc = inc;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.rausstellen.ws.packet.incoming.IsIncIgnoredRequest';
  }
}

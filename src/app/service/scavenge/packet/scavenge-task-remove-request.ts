import {Packet} from '../../packet/packet';

export class ScavengeTaskRemoveRequest implements Packet {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.scavenge.ws.packet.incoming.ScavengeTaskRemoveRequest';
  }
}

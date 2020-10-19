import {Packet} from '../../packet/packet';

export class UnignoreVillageRequest implements Packet {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.rausstellen.ws.packet.incoming.UnignoreVillageRequest';
  }
}

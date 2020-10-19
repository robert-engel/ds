import {Packet} from '../../packet/packet';

export class VillageByIdRequest implements Packet {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.village.ws.packet.incoming.GetVillageByIdRequest';
  }
}

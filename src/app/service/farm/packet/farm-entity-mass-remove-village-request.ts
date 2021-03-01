import {Packet} from '../../packet/packet';

export class FarmEntityMassRemoveVillageRequest implements Packet {

  id: number;
  villages: string;

  constructor(id: number, villages: string) {
    this.id = id;
    this.villages = villages;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.farm.assist.ws.packet.incoming.FarmEntityMassRemoveVillageRequest';
  }
}

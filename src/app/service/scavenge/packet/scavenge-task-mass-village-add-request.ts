import {Packet} from '../../packet/packet';

export class ScavengeTaskMassVillageAddRequest implements Packet {

  id: number;
  villages: string;

  constructor(id: number, villages: string) {
    this.id = id;
    this.villages = villages;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.scavenge.ws.packet.incoming.ScavengeTaskMassVillageAddRequest';
  }
}

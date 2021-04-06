import {Packet} from '../../packet/packet';

export class BabaPruneMassRemoveVillageRequest implements Packet {

  group: number;
  villages: string;

  constructor(group: number, villages: string) {
    this.group = group;
    this.villages = villages;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autocata.ws.packet.incoming.BabaPruneMassRemoveVillageRequest';
  }
}

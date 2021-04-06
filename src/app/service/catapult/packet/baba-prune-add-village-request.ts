import {Packet} from '../../packet/packet';

export class BabaPruneAddVillageRequest implements Packet {

  group: number;
  village: number;

  constructor(group: number, village: number) {
    this.group = group;
    this.village = village;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autocata.ws.packet.incoming.BabaPruneAddVillageRequest';
  }
}

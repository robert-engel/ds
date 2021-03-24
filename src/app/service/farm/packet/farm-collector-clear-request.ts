import {Packet} from '../../packet/packet';

export class FarmCollectorClearRequest implements Packet {

  village: number;

  constructor(village: number) {
    this.village = village;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.farm.ws.packet.incoming.FarmTroopCollectorClearVillageRequest';
  }
}

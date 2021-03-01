import {Packet} from '../../packet/packet';

export class ScavengeTaskVillageAddRequest implements Packet {

  id: number;
  village: number;

  constructor(id: number, village: number) {
    this.id = id;
    this.village = village;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.scavenge.ws.packet.incoming.ScavengeTaskVillageAddRequest';
  }
}

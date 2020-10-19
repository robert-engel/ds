import {Packet} from '../../packet/packet';

export class VillageSearchRequest implements Packet {

  id: number;
  query: string;

  constructor(query: string) {
    this.id = Math.random();
    this.query = query;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.village.ws.packet.incoming.VillageSearchRequest';
  }
}

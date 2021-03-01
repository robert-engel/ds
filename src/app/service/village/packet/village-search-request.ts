import {Packet} from '../../packet/packet';

export class VillageSearchRequest implements Packet {

  id: number;
  query: string;
  onlyOwn: boolean;

  constructor(query: string, onlyOwn: boolean) {
    this.id = Math.random();
    this.query = query;
    this.onlyOwn = onlyOwn;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.village.ws.packet.incoming.VillageSearchRequest';
  }
}

import {Packet} from '../../packet/packet';

export class VillageCoordPasteRequest implements Packet {

  id: number;
  paste: string;

  constructor(paste: string) {
    this.id = Math.random();
    this.paste = paste;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.village.ws.packet.incoming.VillageCoordPasteRequest';
  }
}

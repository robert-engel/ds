import {Packet} from '../../packet/packet';

export class DeleteBabaInfoRequest implements Packet {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autocata.ws.packet.incoming.DeleteBabaInfoRequest';
  }
}

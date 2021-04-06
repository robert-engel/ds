import {Packet} from '../../packet/packet';

export class BabaPruneDeleteGroupRequest implements Packet {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autocata.ws.packet.incoming.BabaPruneDeleteGroupRequest';
  }
}

import {Packet} from '../../packet/packet';

export class DeleteFarmEntityRequest implements Packet {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.farm.assist.ws.packet.incoming.DeleteFarmEntityRequest';
  }
}

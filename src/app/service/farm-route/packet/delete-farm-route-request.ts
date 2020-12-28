import {Packet} from '../../packet/packet';

export class DeleteFarmRouteRequest implements Packet {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.farm.route.ws.packet.incoming.DeleteFarmRouteRequest';
  }
}

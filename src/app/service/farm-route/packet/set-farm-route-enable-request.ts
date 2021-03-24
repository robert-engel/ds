import {Packet} from '../../packet/packet';

export class SetFarmRouteEnableRequest implements Packet {

  enable: boolean;

  constructor(enable: boolean) {
    this.enable = enable;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.farm.route.ws.packet.incoming.SetFarmRouteEnableRequest';
  }
}

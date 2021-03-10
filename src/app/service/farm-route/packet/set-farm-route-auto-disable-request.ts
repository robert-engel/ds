import {Packet} from '../../packet/packet';

export class SetFarmRouteAutoDisableRequest implements Packet {

  autoDisable: boolean;

  constructor(autoDisable: boolean) {
    this.autoDisable = autoDisable;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.farm.route.ws.packet.incoming.SetFarmRouteAutoDisableRequest';
  }
}

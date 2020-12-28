import {Packet} from '../../packet/packet';

export class FarmRouteSetEnabledRequest implements Packet {

  id: number;
  enabled: boolean;

  constructor(id: number, enabled: boolean) {
    this.id = id;
    this.enabled = enabled;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.farm.route.ws.packet.incoming.FarmRouteSetEnabledRequest';
  }
}

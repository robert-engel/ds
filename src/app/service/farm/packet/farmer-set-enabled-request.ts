import {Packet} from '../../packet/packet';

export class FarmerSetEnabledRequest implements Packet {

  enabled: boolean;

  constructor(enabled: boolean) {
    this.enabled = enabled;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.farm.assist.ws.packet.incoming.FarmerSetEnabledRequest';
  }
}

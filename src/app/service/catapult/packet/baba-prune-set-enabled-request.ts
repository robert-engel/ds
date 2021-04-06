import {Packet} from '../../packet/packet';

export class BabaPruneSetEnabledRequest implements Packet {

  enabled: boolean;

  constructor(enabled: boolean) {
    this.enabled = enabled;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autocata.ws.packet.incoming.BabaPruneSetEnabledRequest';
  }
}

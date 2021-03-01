import {Packet} from '../../packet/packet';

export class ScavengeTaskEnableRequest implements Packet {

  enabled: boolean;

  constructor(enabled: boolean) {
    this.enabled = enabled;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.scavenge.ws.packet.incoming.ScavengeSetEnabledRequest';
  }
}

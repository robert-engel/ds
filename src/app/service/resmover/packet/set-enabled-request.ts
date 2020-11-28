import {Packet} from '../../packet/packet';

export class SetEnabledRequest implements Packet {

  enabled: boolean;

  constructor(enabled: boolean) {
    this.enabled = enabled;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.ressmover.ws.packet.incoming.SetEnabledRequest';
  }
}

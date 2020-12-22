import {Packet} from '../../packet/packet';

export class FarmEntitySetEnabledRequest implements Packet {

  id: number;
  enabled: boolean;

  constructor(id: number, enabled: boolean) {
    this.id = id;
    this.enabled = enabled;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.farm.ws.packet.incoming.FarmEntitySetEnabledRequest';
  }
}

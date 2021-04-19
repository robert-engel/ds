import {Packet} from '../../packet/packet';

export class AutoRecruitSetEnabledRequest implements Packet {

  enabled: boolean;

  constructor(enabled: boolean) {
    this.enabled = enabled;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autorecruit.ws.packet.incoming.AutoRecruitSetEnabledRequest';
  }
}

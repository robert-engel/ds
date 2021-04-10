import {Packet} from '../../packet/packet';

export class AntiCaptchaSetEnabledRequest implements Packet {

  enabled: boolean;

  constructor(enabled: boolean) {
    this.enabled = enabled;
  }

  getName(): string {
    return 'io.robertengel.dsbot.driver.ws.packet.incoming.AntiCaptchaSetEnabledRequest';
  }
}

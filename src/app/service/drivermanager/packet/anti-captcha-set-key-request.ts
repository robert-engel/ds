import {Packet} from '../../packet/packet';

export class AntiCaptchaSetKeyRequest implements Packet {

  key: string;

  constructor(key: string) {
    this.key = key;
  }

  getName(): string {
    return 'io.robertengel.dsbot.driver.ws.packet.incoming.AntiCaptchaSetKeyRequest';
  }
}

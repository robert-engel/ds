import {Packet} from '../../packet/packet';

export class ReloginEnableRequest implements Packet {

  enabled: boolean;

  constructor(enabled: boolean) {
    this.enabled = enabled;
  }

  getName(): string {
    return 'io.robertengel.dsbot.relogin.ws.packet.incoming.ReLoginEnableRequest';
  }
}

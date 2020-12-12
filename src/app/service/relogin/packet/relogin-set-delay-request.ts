import {Packet} from '../../packet/packet';

export class ReloginSetDelayRequest implements Packet {

  delay: number;

  constructor(delay: number) {
    this.delay = delay;
  }

  getName(): string {
    return 'io.robertengel.dsbot.relogin.ws.packet.incoming.ReLoginSetDelayRequest';
  }
}

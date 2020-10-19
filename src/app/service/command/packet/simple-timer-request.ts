import {Packet} from '../../packet/packet';

export class SimpleTimerRequest implements Packet {

  time: string;

  constructor(time: string) {
    this.time = time;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.SimpleTimerRequest';
  }
}

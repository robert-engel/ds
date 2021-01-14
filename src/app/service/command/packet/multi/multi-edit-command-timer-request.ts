import {Packet} from '../../../packet/packet';

export class MultiEditCommandTimerRequest implements Packet {

  ids: number[];
  timerLogic: string;

  constructor(ids: number[], timer: string) {
    this.ids = ids;
    this.timerLogic = timer;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.multi.MultiEditCommandTimerRequest';
  }
}

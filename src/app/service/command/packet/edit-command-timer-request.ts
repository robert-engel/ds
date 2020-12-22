import {Packet} from '../../packet/packet';

export class EditCommandTimerRequest implements Packet {

  id: number;
  timerLogic: string;

  constructor(id: number, timer: string) {
    this.id = id;
    this.timerLogic = timer;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandTimerRequest';
  }
}

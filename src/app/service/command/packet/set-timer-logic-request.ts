import {Packet} from '../../packet/packet';

export class SetTimerLogicRequest implements Packet {

  timerLogic: string;

  constructor(timerLogic: string) {
    this.timerLogic = timerLogic;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.SetTimerLogicRequest';
  }
}

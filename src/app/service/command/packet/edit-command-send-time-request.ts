import {Packet} from '../../packet/packet';

export class EditCommandSendTimeRequest implements Packet {
  id: number;
  sendTime: number;

  constructor(id: number, sendTime: number) {
    this.id = id;
    this.sendTime = sendTime;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandSendTimeRequest';
  }
}

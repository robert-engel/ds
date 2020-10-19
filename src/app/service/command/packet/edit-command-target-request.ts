import {Packet} from '../../packet/packet';

export class EditCommandTargetRequest implements Packet {
  id: number;
  target: number;

  constructor(id: number, target: number) {
    this.id = id;
    this.target = target;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandTargetRequest';
  }
}

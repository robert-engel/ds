import {Packet} from '../../packet/packet';

export class EditCommandArrivalTimeRequest implements Packet {

  id: number;
  arrivalTime: number;

  constructor(id: number, arrivalTime: number) {
    this.id = id;
    this.arrivalTime = arrivalTime;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandArrivalTimeRequest';
  }
}

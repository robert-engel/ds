import {Packet} from '../../packet/packet';

export class EditIncRequest implements Packet {

  id: number;
  slowestUnit: string;

  constructor(id: number, slowestUnit: string) {
    this.id = id;
    this.slowestUnit = slowestUnit;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.incmanager.ws.packet.incoming.EditIncRequest';
  }
}

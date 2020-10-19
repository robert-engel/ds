import {Packet} from '../../packet/packet';

export class EditSlowestUnitRequest implements Packet {

  id: number;
  slowestUnit: string;

  constructor(id: number, slowestUnit: string) {
    this.id = id;
    this.slowestUnit = slowestUnit;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.EditSlowestUnitRequest';
  }
}

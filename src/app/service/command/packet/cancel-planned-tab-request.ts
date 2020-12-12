import {Packet} from '../../packet/packet';

export class CancelPlannedTabRequest implements Packet {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.tabber.ws.packet.incoming.CancelPlannedTabRequest';
  }
}

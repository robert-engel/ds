import {Packet} from '../../packet/packet';

export class RequestIncPacket implements Packet {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.incmanager.ws.packet.incoming.GetIncRequest';
  }
}

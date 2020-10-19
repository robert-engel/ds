import {Packet} from '../../packet/packet';

export class DeleteStandardTroopTemplateRequest implements Packet {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

  getName(): string {
    return 'io.robertengel.dsbot.unitengine.ws.packet.incoming.DeleteStandardTroopTemplateRequest';
  }
}

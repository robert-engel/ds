import {Packet} from '../../packet/packet';

export class EditStandardTroopTemplateRequest implements Packet {

  id: number;
  name: string;
  troops: any;

  constructor(id: number, name: string, troops: any) {
    this.id = id;
    this.name = name;
    this.troops = troops;
  }

  getName(): string {
    return 'io.robertengel.dsbot.unitengine.ws.packet.incoming.EditStandardTroopTemplateRequest';
  }
}

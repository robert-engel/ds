import {Packet} from '../../packet/packet';

export class AddStandardTroopTemplateRequest implements Packet {

  name: string;
  troops: any;

  constructor(name: string, troops: any) {
    this.name = name;
    this.troops = troops;
  }

  getName(): string {
    return 'io.robertengel.dsbot.unitengine.ws.packet.incoming.AddStandardTroopTemplateRequest';
  }
}

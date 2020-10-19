import {Packet} from '../../packet/packet';

export class SetRausstellTroopTemplateRequest implements Packet {

  troops: any;

  constructor(troops: any) {
    this.troops = troops;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.rausstellen.ws.packet.incoming.SetRausstellTroopTemplateRequest';
  }
}

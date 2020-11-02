import {Packet} from '../../packet/packet';

export class EditFakeTemplateRequest implements Packet {

  troops: any;

  constructor(troops: any) {
    this.troops = troops;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.planner.fake.ws.packet.incoming.EditFakeTemplateRequest';
  }
}

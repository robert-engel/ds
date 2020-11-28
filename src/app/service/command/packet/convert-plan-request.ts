import {Packet} from '../../packet/packet';

export class ConvertPlanRequest implements Packet {

  plan: string;

  constructor(plan: string) {
    this.plan = plan;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.ConvertPlanRequest';
  }
}

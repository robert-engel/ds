import {Packet} from '../../packet/packet';

export class ImportWorkbenchRequest implements Packet {

  plan: string;

  constructor(plan: string) {
    this.plan = plan;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.ImportWorkbenchRequest';
  }
}

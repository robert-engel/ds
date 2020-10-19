import {Packet} from '../../packet/packet';

export class ImportWorkbenchRequest implements Packet {

  id: number;
  plan: string;

  constructor(plan: string) {
    this.id = Math.random();
    this.plan = plan;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.ImportWorkbenchRequest';
  }
}

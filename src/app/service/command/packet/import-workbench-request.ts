import {Packet} from '../../packet/packet';

export class ImportWorkbenchRequest implements Packet {

  id: number;
  plan: string;
  cataTarget: string;

  constructor(plan: string, cataTarget: string) {
    this.id = Math.random();
    this.plan = plan;
    this.cataTarget = cataTarget;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.ImportWorkbenchRequest';
  }
}

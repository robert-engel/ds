import {Packet} from '../../packet/packet';

export class ImportWorkbenchRequest implements Packet {

  id: number;
  plan: string;
  cataTarget: string;
  ms: number | undefined;

  constructor(plan: string, cataTarget: string, ms: number | undefined) {
    this.id = Math.random();
    this.plan = plan;
    this.cataTarget = cataTarget;
    this.ms = ms;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.ImportWorkbenchRequest';
  }
}

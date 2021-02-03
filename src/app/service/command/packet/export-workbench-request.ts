import {Packet} from '../../packet/packet';

export class ExportWorkbenchRequest implements Packet {
  origin: number | undefined;
  target: number | undefined;
  type: string | undefined;
  unit: string | undefined;
  cataTarget: string | undefined;


  constructor(
    origin: number | undefined,
    target: number | undefined,
    type: string | undefined,
    unit: string | undefined,
    cataTarget: string | undefined
  ) {
    this.origin = origin;
    this.target = target;
    this.type = type;
    this.unit = unit;
    this.cataTarget = cataTarget;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.WorkbenchExportRequest';
  }
}

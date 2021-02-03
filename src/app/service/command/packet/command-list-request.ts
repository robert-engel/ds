import {Packet} from '../../packet/packet';

export class CommandListRequest implements Packet {

  id = Math.random();
  max: number;
  first: number;

  origin: number | undefined;
  target: number | undefined;
  type: string | undefined;
  unit: string | undefined;
  cataTarget: string | undefined;


  constructor(
    max: number,
    first: number,
    origin: number | undefined,
    target: number | undefined,
    type: string | undefined,
    unit: string | undefined,
    cataTarget: string | undefined
  ) {
    this.max = max;
    this.first = first;
    this.origin = origin;
    this.target = target;
    this.type = type;
    this.unit = unit;
    this.cataTarget = cataTarget;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.CommandListRequest';
  }
}

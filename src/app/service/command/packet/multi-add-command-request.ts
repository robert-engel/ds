import {Packet} from '../../packet/packet';
import {CommandType} from '../structures/command-type';

export class MultiAddCommandRequest implements Packet {

  sources: number[];
  target: number;
  slowestUnit: number;
  commandType: string;
  arrival: number;
  template: number;
  troops: object;

  constructor(
    sources: number[],
    target: number,
    slowestUnit: number,
    commandType: CommandType,
    arrival: number,
    template: number,
    troops: object
  ) {
    this.sources = sources;
    this.target = target;
    this.slowestUnit = slowestUnit;
    this.commandType = commandType.name;
    this.arrival = arrival;
    this.template = template;
    this.troops = troops;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.MultiAddCommandRequest';
  }
}

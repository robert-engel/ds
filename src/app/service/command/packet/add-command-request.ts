import {Packet} from '../../packet/packet';
import {CommandType} from '../../structures/command-type';

export class AddCommandRequest implements Packet {

  source: number;
  target: number;
  slowestUnit: number;
  commandType: CommandType;
  arrival: number;
  template: number;
  troops: object;


  constructor(source: number, target: number, slowestUnit: number, commandType: CommandType, arrival: number, template: number,
              troops: object) {
    this.source = source;
    this.target = target;
    this.slowestUnit = slowestUnit;
    this.commandType = commandType;
    this.arrival = arrival;
    this.template = template;
    this.troops = troops;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.command.ws.packet.incoming.AddCommandRequest';
  }
}

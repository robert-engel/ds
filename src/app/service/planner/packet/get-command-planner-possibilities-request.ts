import {Packet} from '../../packet/packet';

export class GetCommandPlannerPossibilitiesRequest implements Packet {

  id: number;
  village: number;
  time: number;

  constructor(village: number, time: number) {
    this.id = Math.random();
    this.village = village;
    this.time = time;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.planner.command.ws.packet.incoming.GetCommandPlannerPossibilitiesRequest';
  }
}

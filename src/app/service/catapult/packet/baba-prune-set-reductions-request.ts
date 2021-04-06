import {Packet} from '../../packet/packet';
import {BuildingTask} from '../../auto-builder/structure/building-task';

export class BabaPruneSetReductionsRequest implements Packet {

  reductions: BuildingTask[];

  constructor(reductions: BuildingTask[]) {
    this.reductions = reductions;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autocata.ws.packet.incoming.BabaPruneSetReductionsRequest';
  }
}

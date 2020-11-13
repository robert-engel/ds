import {Packet} from '../../packet/packet';
import {VillageCount} from '../../structures/village-count';
import {Timeframe} from '../../structures/timeframe';

export class FakePlanRequest implements Packet {

  sources: VillageCount[] = [];
  targets: VillageCount[] = [];
  sendFrames: Timeframe[] = [];
  arrivalFrames: Timeframe[] = [];

  constructor(sources: VillageCount[], targets: VillageCount[], sendFrames: Timeframe[], arrivalFrames: Timeframe[]) {
    this.sources = sources;
    this.targets = targets;
    this.sendFrames = sendFrames;
    this.arrivalFrames = arrivalFrames;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.planner.fake.ws.packet.incoming.FakePlanRequest';
  }
}

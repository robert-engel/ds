import {Packet} from '../../packet/packet';

export class EditGlobalTimeFrameRequest implements Packet {

  start: boolean;
  date: number;

  constructor(start: boolean, date: number) {
    this.start = start;
    this.date = date;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.planner.fake.ws.packet.incoming.EditGlobalTimeFrameRequest';
  }
}

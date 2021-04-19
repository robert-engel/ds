import {Packet} from '../../packet/packet';
import {UnitsHolder} from '../../structures/units-holder';

export class AutoRecruitAddTaskRequest implements Packet {

  group: number;
  units: UnitsHolder;

  constructor(group: number, units: UnitsHolder) {
    this.group = group;
    this.units = units;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autorecruit.ws.packet.incoming.AutoRecruitTaskAddRequest';
  }
}

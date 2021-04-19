import {Packet} from '../../packet/packet';

export class AutoRecruitRemoveTaskRequest implements Packet {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autorecruit.ws.packet.incoming.AutoRecruitTaskRemoveRequest';
  }
}

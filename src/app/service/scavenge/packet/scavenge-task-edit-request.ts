import {Packet} from '../../packet/packet';
import {TroopTemplate} from '../../structures/troop-template';

export class ScavengeTaskEditRequest implements Packet {

  id: number;
  troops: TroopTemplate;

  constructor(id: number, troops: TroopTemplate) {
    this.id = id;
    this.troops = troops;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.scavenge.ws.packet.incoming.ScavengeTaskEditRequest';
  }
}

import {Packet} from '../../packet/packet';
import {TroopTemplate} from '../../structures/troop-template';

export class ScavengeTaskAddRequest implements Packet {

  troops: TroopTemplate;

  constructor(troops: TroopTemplate) {
    this.troops = troops;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.scavenge.ws.packet.incoming.ScavengeTaskAddRequest';
  }
}

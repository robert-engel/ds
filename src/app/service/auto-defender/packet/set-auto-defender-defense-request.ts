import {Packet} from '../../packet/packet';
import {DefenseAmount} from '../structure/defense-amount';
import {DefenseFeature} from '../structure/defense-feature';

export class SetAutoDefenderDefenseRequest implements Packet {

  feature: string;
  size: string;
  amount: DefenseAmount;

  constructor(feature: DefenseFeature, size: string, amount: DefenseAmount) {
    this.feature = feature.id;
    this.size = size;
    this.amount = amount;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autodefender.ws.packet.incoming.SetAutoDefenderDefenseRequest';
  }
}

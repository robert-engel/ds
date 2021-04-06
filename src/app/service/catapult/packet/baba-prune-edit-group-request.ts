import {Packet} from '../../packet/packet';

export class BabaPruneEditGroupRequest implements Packet {

  id: number;
  enabled: boolean;
  range: number;
  amount: string;

  constructor(id: number, enabled: boolean, range: number, amount: string) {
    this.id = id;
    this.enabled = enabled;
    this.range = range;
    this.amount = amount;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autocata.ws.packet.incoming.BabaPruneEditGroupRequest';
  }
}

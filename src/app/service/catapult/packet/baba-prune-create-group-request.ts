import {Packet} from '../../packet/packet';

export class BabaPruneCreateGroupRequest implements Packet {

  range: number;
  amount: string;

  constructor(range: number, amount: string) {
    this.range = range;
    this.amount = amount;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autocata.ws.packet.incoming.BabaPruneCreateGroupRequest';
  }
}

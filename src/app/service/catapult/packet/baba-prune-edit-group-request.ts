import {Packet} from '../../packet/packet';

export class BabaPruneEditGroupRequest implements Packet {

  id: number;
  enabled: boolean;
  range: number;
  amount: string;
  coordinateX: number;
  coordinateY: number;

  constructor(id: number, enabled: boolean, range: number, amount: string, coordinateX: number, coordinateY: number) {
    this.id = id;
    this.enabled = enabled;
    this.range = range;
    this.amount = amount;
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autocata.ws.packet.incoming.BabaPruneEditGroupRequest';
  }
}

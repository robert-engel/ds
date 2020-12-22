import {Packet} from '../../packet/packet';

export class FarmerSetMaxIncsRequest implements Packet {

  max: number;

  constructor(max: number) {
    this.max = max;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.farm.ws.packet.incoming.FarmerSetMaxIncsRequest';
  }
}

import {Packet} from '../../packet/packet';

export class GetBabaInfoRequest implements Packet {

  id: number;
  max: number;
  first: number;
  sort: string;
  order: string;

  constructor(
    max: number,
    first: number,
    sort: string,
    order: string,
  ) {
    this.id = Math.random();
    this.max = max;
    this.first = first;
    this.sort = sort;
    this.order = order;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autocata.ws.packet.incoming.GetBabaInformationRequest';
  }
}

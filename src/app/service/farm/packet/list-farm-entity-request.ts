import {Packet} from '../../packet/packet';

export class ListFarmEntityRequest implements Packet {

  getName(): string {
    return 'ListFarmEntityRequest';
  }
}

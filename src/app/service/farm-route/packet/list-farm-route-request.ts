import {Packet} from '../../packet/packet';

export class ListFarmRouteRequest implements Packet {

  getName(): string {
    return 'ListFarmRouteRequest';
  }
}

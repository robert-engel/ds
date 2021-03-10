import {Packet} from '../../packet/packet';

export class FarmRouteConfigRequest implements Packet {

  getName(): string {
    return 'FarmRouteConfigRequest';
  }
}

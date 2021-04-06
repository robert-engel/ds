import {Packet} from '../../packet/packet';

export class BabaPruneConfigRequest implements Packet {

  getName(): string {
    return 'BabaPruneConfigRequest';
  }
}

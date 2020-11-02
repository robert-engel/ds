import {Packet} from '../../packet/packet';

export class FakeSelectorRequest implements Packet {

  getName(): string {
    return 'FakeSelectorRequest';
  }
}

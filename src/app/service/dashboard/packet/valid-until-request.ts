import {Packet} from '../../packet/packet';

export class ValidUntilRequest implements Packet {
  getName(): string {
    return 'ValidUntilRequest';
  }
}

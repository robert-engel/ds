import {Packet} from '../../packet/packet';

export class VersionRequest implements Packet {
  getName(): string {
    return 'VersionRequest';
  }
}

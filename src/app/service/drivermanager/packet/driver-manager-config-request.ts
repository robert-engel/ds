import {Packet} from '../../packet/packet';

export class DriverManagerConfigRequest implements Packet {
  getName(): string {
    return 'DriverManagerConfigRequest';
  }
}

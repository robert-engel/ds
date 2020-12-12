import {Packet} from '../../packet/packet';

export class GetReloginConfigRequest implements Packet {
  getName(): string {
    return 'GetReLoginConfigRequest';
  }
}

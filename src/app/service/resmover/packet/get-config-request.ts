import {Packet} from '../../packet/packet';

export class GetConfigRequest implements Packet {

  getName(): string {
    return 'GetConfigRequest';
  }
}

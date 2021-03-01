import {Packet} from '../../packet/packet';

export class AutoBuilderGetConfigRequest implements Packet {

  getName(): string {
    return 'AutoBuilderGetConfigRequest';
  }
}

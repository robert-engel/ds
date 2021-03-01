import {Packet} from '../../packet/packet';

export class AutoBuilderGetBuildingsRequest implements Packet {

  getName(): string {
    return 'AutoBuilderGetBuildingsRequest';
  }
}

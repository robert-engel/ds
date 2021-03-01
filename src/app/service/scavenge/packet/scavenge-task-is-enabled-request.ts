import {Packet} from '../../packet/packet';

export class ScavengeTaskIsEnabledRequest implements Packet {

  getName(): string {
    return 'ScavengeIsEnabledRequest';
  }
}

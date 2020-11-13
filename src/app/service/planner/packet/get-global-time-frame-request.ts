import {Packet} from '../../packet/packet';

export class GetGlobalTimeFrameRequest implements Packet {

  getName(): string {
    return 'GlobalTimeFrameRequest';
  }
}

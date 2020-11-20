import {Packet} from '../../packet/packet';

export class GetTimerLogicRequest implements Packet {
  getName(): string {
    return 'GetTimerLogicRequest';
  }
}

import {Packet} from '../../packet/packet';

export class AutoRecruitConfigRequest implements Packet {
  getName(): string {
    return 'AutoRecruitConfigRequest';
  }
}

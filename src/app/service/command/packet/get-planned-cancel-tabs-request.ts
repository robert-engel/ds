import {Packet} from '../../packet/packet';

export class GetPlannedCancelTabsRequest implements Packet {
  getName(): string {
    return 'GetPlannedCancelTabsRequest';
  }
}

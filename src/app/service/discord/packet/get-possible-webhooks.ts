import {Packet} from '../../packet/packet';

export class GetPossibleWebhooks implements Packet {

  getName(): string {
    return 'GetPossibleWebhooks';
  }
}

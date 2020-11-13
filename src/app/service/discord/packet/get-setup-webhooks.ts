import {Packet} from '../../packet/packet';

export class GetSetupWebhooks implements Packet {

  getName(): string {
    return 'GetSetupWebhooks';
  }
}

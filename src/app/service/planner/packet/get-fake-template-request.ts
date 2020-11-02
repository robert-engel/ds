import {Packet} from '../../packet/packet';

export class GetFakeTemplateRequest implements Packet {

  getName(): string {
    return 'GetFakeTemplateRequest';
  }
}

import {Packet} from '../../packet/packet';

export class GetRausstellTroopTemplateRequest implements Packet {
  getName(): string {
    return 'GetRausstellTroopTemplateRequest';
  }
}

import {Packet} from '../../packet/packet';

export class GetStandardTemplateListRequest implements Packet {
  getName(): string {
    return 'GetStandardTroopTemplateRequest';
  }
}

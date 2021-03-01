import {Packet} from '../../packet/packet';

export class AutoBuilderTemplateListRequest implements Packet {

  getName(): string {
    return 'AutoBuilderTemplateListRequest';
  }
}

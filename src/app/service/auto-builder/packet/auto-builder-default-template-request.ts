import {Packet} from '../../packet/packet';

export class AutoBuilderDefaultTemplateRequest implements Packet {

  getName(): string {
    return 'AutoBuilderDefaultTemplateRequest';
  }
}

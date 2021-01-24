import {Packet} from '../../packet/packet';

export class CommandListTypesRequest implements Packet {
  getName(): string {
    return 'CommandListUsedTypesRequest';
  }
}

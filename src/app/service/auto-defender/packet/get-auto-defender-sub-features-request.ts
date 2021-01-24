import {Packet} from '../../packet/packet';

export class GetAutoDefenderSubFeaturesRequest implements Packet {
  getName(): string {
    return 'GetAutoDefenderSubFeaturesRequest';
  }
}

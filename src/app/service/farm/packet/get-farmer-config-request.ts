import {Packet} from '../../packet/packet';

export class GetFarmerConfigRequest implements Packet {

  getName(): string {
    return 'GetFarmerConfigRequest';
  }
}

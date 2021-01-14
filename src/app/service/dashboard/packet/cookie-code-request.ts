import {Packet} from '../../packet/packet';

export class CookieCodeRequest implements Packet {
  getName(): string {
    return 'DsCookieGetCodeRequest';
  }
}

import {Packet} from '../../packet/packet';

export class WithdrawSupportRequest implements Packet {

  village: number;

  constructor(village: number) {
    this.village = village;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.withdraw.ws.packet.incoming.WithdrawSupportRequest';
  }
}

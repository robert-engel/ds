import {Packet} from '../../packet/packet';

export class CancelTabberRequest implements Packet {

  village: number;
  troops: any;
  second: number;
  msStart: number;
  msEnd: number;

  constructor(village: number, troops: any, second: number, msStart: number, msEnd: number) {
    this.village = village;
    this.troops = troops;
    this.second = second;
    this.msStart = msStart;
    this.msEnd = msEnd;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.tabber.ws.packet.incoming.CancelTabberRequest';
  }
}

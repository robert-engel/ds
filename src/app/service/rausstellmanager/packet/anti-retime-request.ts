import {Packet} from '../../packet/packet';

export class AntiRetimeRequest implements Packet {

  time: number;
  village: number;
  units: any;

  constructor(time: number, village: number, units: any) {
    this.time = time;
    this.village = village;
    this.units = units;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.rausstellen.ws.packet.incoming.AntiRetimeRequest';
  }
}

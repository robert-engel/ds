import {Packet} from '../../packet/packet';

export class FarmCollectorAddRequest implements Packet {

  village: number;
  time: number;

  constructor(village: number, time: number) {
    this.village = village;
    this.time = time;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.farm.ws.packet.incoming.FarmTroopCollectorAddTimeRequest';
  }
}

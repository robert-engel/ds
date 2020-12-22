import {Packet} from '../../packet/packet';

export class AddFarmEntityRequest implements Packet {

  farmGroup: string;
  units: any;
  timerInterval: number;
  maxDistance: number;

  constructor(farmGroup: string, units: any, timerInterval: number, maxDistance: number) {
    this.farmGroup = farmGroup;
    this.units = units;
    this.timerInterval = timerInterval;
    this.maxDistance = maxDistance;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.farm.ws.packet.incoming.AddFarmEntityRequest';
  }
}

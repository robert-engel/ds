import {Packet} from '../../packet/packet';

export class EditFarmEntityRequest implements Packet {

  id: number;
  farmGroup: string;
  units: any;
  timerInterval: number;
  maxDistance: number;

  constructor(id: number, farmGroup: string, units: any, timerInterval: number, maxDistance: number) {
    this.id = id;
    this.farmGroup = farmGroup;
    this.units = units;
    this.timerInterval = timerInterval;
    this.maxDistance = maxDistance;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.farm.ws.packet.incoming.EditFarmEntityRequest';
  }
}

import {Packet} from '../../packet/packet';

export class EditFarmRouteRequest implements Packet {

  id: number;
  source: number;
  target: number;
  troops: any;
  timerInterval: number;

  constructor(id: number, source: number, target: number, troops: any, timerInterval: number) {
    this.id = id;
    this.source = source;
    this.target = target;
    this.troops = troops;
    this.timerInterval = timerInterval;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.farm.route.ws.packet.incoming.EditFarmRouteRequest';
  }
}

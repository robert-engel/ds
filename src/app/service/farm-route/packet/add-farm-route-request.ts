import {Packet} from '../../packet/packet';

export class AddFarmRouteRequest implements Packet {

  source: number;
  target: number;
  troops: any;
  timerInterval: number;

  constructor(source: number, target: number, troops: any, timerInterval: number) {
    this.source = source;
    this.target = target;
    this.troops = troops;
    this.timerInterval = timerInterval;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.farm.route.ws.packet.incoming.AddFarmRouteRequest';
  }
}

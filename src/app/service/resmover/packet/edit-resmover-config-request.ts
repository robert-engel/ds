import {Packet} from '../../packet/packet';
import {ResourceHolder} from '../structures/resource-holder';

export class EditResmoverConfigRequest implements Packet {

  minResources: ResourceHolder;
  maxResources: number;
  interval: number;
  maxDistance: number;

  constructor(minResources: ResourceHolder, maxResources: number, interval: number, maxDistance: number) {
    this.minResources = minResources;
    this.maxResources = maxResources;
    this.interval = interval;
    this.maxDistance = maxDistance;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.ressmover.ws.packet.incoming.EditResourceMoverConfigRequest';
  }
}

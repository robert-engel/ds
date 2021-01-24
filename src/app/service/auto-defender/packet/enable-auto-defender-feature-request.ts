import {Packet} from '../../packet/packet';
import {DefenseFeature} from '../structure/defense-feature';

export class EnableAutoDefenderFeatureRequest implements Packet {

  feature: string;
  enabled: boolean;

  constructor(feature: DefenseFeature, enabled: boolean) {
    this.feature = feature.id;
    this.enabled = enabled;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autodefender.ws.packet.incoming.EnableAutoDefenderFeatureRequest';
  }
}

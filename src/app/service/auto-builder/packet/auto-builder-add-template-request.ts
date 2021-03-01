import {Packet} from '../../packet/packet';
import {BuildingTask} from '../structure/building-task';

export class AutoBuilderAddTemplateRequest implements Packet {

  name: string;
  template: BuildingTask[];

  constructor(name: string, template: BuildingTask[]) {
    this.name = name;
    this.template = template;
  }

  getName(): string {
    return 'io.robertengel.dsbot.feature.autobuilder.ws.packet.incoming.AutoBuilderAddTemplateRequest';
  }
}

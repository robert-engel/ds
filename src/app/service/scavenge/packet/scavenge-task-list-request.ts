import {Packet} from '../../packet/packet';

export class ScavengeTaskListRequest implements Packet {

  getName(): string {
    return 'ScavengeTasksListRequest';
  }
}

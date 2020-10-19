import {Packet} from '../../packet/packet';

export class RequestAllTasks implements Packet {
  getName(): string {
    return 'RequestAllTasksPacket';
  }
}

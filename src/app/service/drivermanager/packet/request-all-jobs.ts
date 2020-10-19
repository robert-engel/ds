import {Packet} from '../../packet/packet';

export class RequestAllJobs implements Packet {
  getName(): string {
    return 'RequestAllJobsPacket';
  }
}

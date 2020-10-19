import {Packet} from '../../packet/packet';

export class ExportWorkbenchRequest implements Packet {
  getName(): string {
    return 'WorkbenchExportRequest';
  }
}

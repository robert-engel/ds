import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'hms'
})
export class HmsPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const hours = Math.floor(value / 36e5);
    const mins = Math.floor((value % 36e5) / 6e4);
    const secs = Math.floor((value % 6e4) / 1000);
    return this.pad(hours, 2) + ':' + this.pad(mins, 2) + ':' + this.pad(secs, 2);
  }

  pad(n, width): string {
    const z = '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

}

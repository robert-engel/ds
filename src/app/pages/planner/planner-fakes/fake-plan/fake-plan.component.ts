import {Component, OnInit} from '@angular/core';
import {VillageCount} from '../../../../service/structures/village-count';
import {Timeframe} from '../../../../service/structures/timeframe';

@Component({
  selector: 'app-fake-plan',
  templateUrl: './fake-plan.component.html',
  styleUrls: ['./fake-plan.component.css']
})
export class FakePlanComponent implements OnInit {

  sources: VillageCount[];
  targets: VillageCount[];
  sendFrames: Timeframe[];
  arrivalFrames: Timeframe[];

  constructor() {
  }

  ngOnInit(): void {
  }

  villageCountValidator(counts: VillageCount[]): boolean {
    if (!Array.isArray(counts)) {
      return true;
    }
    if (counts.length === 0) {
      return true;
    }
    let sum = 0;
    counts.forEach(val => sum += val.count);
    return sum === 0;
  }

  timeFrameValidator(): boolean {
    if (!Array.isArray(this.sendFrames)) {
      return true;
    }
    if (!Array.isArray(this.arrivalFrames)) {
      return true;
    }
    if (this.arrivalFrames.length === 0) {
      return true;
    }
    return this.sendFrames.length === 0;
  }

}

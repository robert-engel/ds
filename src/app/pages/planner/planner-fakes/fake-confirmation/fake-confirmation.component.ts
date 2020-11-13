import {Component, Input, OnInit} from '@angular/core';
import {VillageCount} from '../../../../service/structures/village-count';
import {Timeframe} from '../../../../service/structures/timeframe';
import {PlannerService} from '../../../../service/planner/planner.service';
import {FakePlanResult} from '../../../../service/structures/fake-plan-result';

@Component({
  selector: 'app-fake-confirmation',
  templateUrl: './fake-confirmation.component.html',
  styleUrls: ['./fake-confirmation.component.css']
})
export class FakeConfirmationComponent implements OnInit {

  @Input()
  sources: VillageCount[] = [];
  @Input()
  targets: VillageCount[] = [];
  @Input()
  sendFrames: Timeframe[] = [];
  @Input()
  arrivalFrames: Timeframe[] = [];

  result: FakePlanResult;

  constructor(
    private planner: PlannerService,
  ) {
  }

  ngOnInit(): void {
  }

  countSum(count: VillageCount[]): number {
    if (!count) {
      return 0;
    }
    let sum = 0;
    count.forEach(val => sum += val.count);
    return sum;
  }

  getPlan(): void {
    this.planner.getFakePlan(
      this.sources,
      this.targets,
      this.sendFrames,
      this.arrivalFrames
    ).subscribe(result => {
      this.result = result;
    });
  }
}

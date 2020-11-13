import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {VillageCount} from '../../../../service/structures/village-count';
import {PlannerService} from '../../../../service/planner/planner.service';
import {VillageSelector} from '../../../../service/structures/village-selector';

@Component({
  selector: 'app-fake-sources',
  templateUrl: './fake-sources.component.html',
  styleUrls: ['./fake-sources.component.css']
})
export class FakeSourcesComponent implements OnInit {

  @Output()
  valueChange = new EventEmitter<VillageCount[]>();

  loading = false;
  selector: VillageSelector[];

  constructor(
    private planner: PlannerService,
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.planner.getFakeSelector().subscribe(selector => {
      this.selector = selector.map(val => {
        return {
          village: val.village,
          max: val.potential,
          selected: val.potential,
        };
      });
      this.loading = false;
    });
  }

}

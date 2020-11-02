import {Component, OnInit} from '@angular/core';
import {PlannerService} from '../../../service/planner/planner.service';
import {FakeSelector} from '../../../service/structures/fake-selector';

@Component({
  selector: 'app-planner-fakes',
  templateUrl: './planner-fakes.component.html',
  styleUrls: ['./planner-fakes.component.css']
})
export class PlannerFakesComponent implements OnInit {

  loading = false;
  selector: FakeSelector[];

  constructor(
    private planner: PlannerService,
  ) {
  }

  ngOnInit(): void {
  }

  load(): void {
    this.loading = true;
    this.planner.getFakeSelector().subscribe(sel => {
      this.selector = sel;
      this.loading = false;
    });
  }

}

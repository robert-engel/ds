import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {PlannerService} from '../../../../service/planner/planner.service';
import {FormControl} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-fake-selector-template',
  templateUrl: './fake-selector-template.component.html',
  styleUrls: ['./fake-selector-template.component.css']
})
export class FakeSelectorTemplateComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  troopForm = new FormControl();

  constructor(private planner: PlannerService) {
  }

  ngOnInit(): void {
    this.planner.getFakeTemplate().pipe(takeUntil(this.unsub$)).subscribe(troops => {
      this.troopForm.setValue(troops);
    });
  }

  saveTroops(): void {
    this.troopForm.disable();
    this.planner.updateFakeTemplate(this.troopForm.value);
    setTimeout(() => {
      this.troopForm.enable();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

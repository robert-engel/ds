import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {CommandService} from '../../../../service/command/command.service';
import {PlannedCancelTab} from '../../../../service/command/structures/planned-cancel-tab';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-incs-cancel-tab-list',
  templateUrl: './incs-cancel-tab-list.component.html',
  styleUrls: ['./incs-cancel-tab-list.component.css']
})
export class IncsCancelTabListComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  plans: PlannedCancelTab[];

  displayedColumns = ['village', 'time', 'ms', 'cancel'];

  constructor(
    private command: CommandService,
  ) {
  }

  ngOnInit(): void {
    this.command.getCancelTabs().pipe(takeUntil(this.unsub$)).subscribe(plans => {
      this.plans = plans;
    });
    this.command.cancelPlansEvents().pipe(takeUntil(this.unsub$)).subscribe(id => {
      this.plans = this.plans.filter(val => {
        return val.id !== id;
      });
    });
    this.command.addedPlansEvents().pipe(takeUntil(this.unsub$)).subscribe(plan => {
      this.plans = [
        ...this.plans,
        plan
      ];
    });
  }

  cancel(id: number): void {
    this.command.cancelPlannedCancelTab(id);
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {FormControl, Validators} from '@angular/forms';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay, takeUntil} from 'rxjs/operators';
import {RausstellManagerService} from '../../../service/rausstellmanager/rausstell-manager.service';
import {IncomingEntity} from '../../../service/structures/incoming-entity';

@Component({
  selector: 'app-rausstell-incs',
  templateUrl: './rausstell-incs.component.html',
  styleUrls: ['./rausstell-incs.component.css']
})
export class RausstellIncsComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  incForm = new FormControl('', Validators.required);

  incs: IncomingEntity[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  displayedColumns: string[] = ['name', 'slowestUnit', 'target', 'origin', 'player', 'arrival', 'delete'];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private rausstell: RausstellManagerService,
  ) {
  }

  ngOnInit(): void {
    this.rausstell.ignoredIncs().pipe(takeUntil(this.unsub$)).subscribe(incs => {
      this.incs = incs;
    });
    this.rausstell.ignoredInc().pipe(takeUntil(this.unsub$)).subscribe(inc => {
      this.incs = [inc, ...this.incs];
    });
    this.rausstell.unignoredInc().pipe(takeUntil(this.unsub$)).subscribe(inc => {
      this.incs = this.incs.filter((value, index, array) => {
        return value.id !== inc.id;
      });
    });
  }

  ignoreInc(): void {
    if (this.incForm.invalid) {
      return;
    }
    if (!(typeof this.incForm.value === 'number')) {
      return;
    }
    this.rausstell.ignoreInc(this.incForm.value);
  }

  unignoreInc(inc: number): void {
    this.rausstell.unignoreInc(inc);
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subject} from 'rxjs';
import {IncomingEntity} from '../../../service/structures/incoming-entity';
import {WebsocketService} from '../../../service/websocket.service';
import {IncManagerService} from '../../../service/incmanager/inc-manager.service';
import {map, shareReplay, takeUntil} from 'rxjs/operators';
import {PageEvent} from '@angular/material/paginator';
import {FormControl} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-incs-overview',
  templateUrl: './incs-overview.component.html',
  styleUrls: ['./incs-overview.component.css']
})
export class IncsOverviewComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  incs: IncomingEntity[] = [];
  count: number;
  size = 10;
  units: string[];

  unitsForm = new FormControl([]);
  cancelled = false;

  displayedColumns: string[] = ['name', 'slowestUnit', 'target', 'origin', 'player', 'arrival', 'remaining'];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 900px)')
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  loading = false;

  constructor(
    private web: WebsocketService,
    private incService: IncManagerService,
    private breakpointObserver: BreakpointObserver,
  ) {
  }

  ngOnInit(): void {
    this.web.info().pipe(takeUntil(this.unsub$)).subscribe(info => {
      this.units = info.units;
    });
    this.loading = true;
    this.incService.getIncList(0, 10, false).subscribe(incs => {
      this.incs = incs.incs;
      this.count = incs.count;
      this.loading = false;
    });
    interval(1000).pipe(takeUntil(this.unsub$)).subscribe(num => {
      this.incs.forEach((task, index, arr) => {
        if (arr[index].remaining > 0) {
          arr[index].remaining -= 1;
        }
      });
    });
    this.unitsForm.valueChanges.pipe(takeUntil(this.unsub$)).subscribe(val => {
      this.loading = true;
      this.incService.getIncList(0, this.size, this.cancelled, val).subscribe(resp => {
        this.incs = resp.incs;
        this.count = resp.count;
        this.loading = false;
      });
    });
  }

  pageUpdate(event: PageEvent): void {
    this.size = event.pageSize;
    this.loading = true;
    this.incService.getIncList(event.pageIndex * event.pageSize, event.pageSize, this.cancelled, this.unitsForm.value).subscribe(resp => {
      this.incs = resp.incs;
      this.count = resp.count;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

}

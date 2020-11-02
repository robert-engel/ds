import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IncManagerService} from '../../../service/incmanager/inc-manager.service';
import {IncomingEntity} from '../../../service/structures/incoming-entity';
import {interval, Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {WebsocketService} from '../../../service/websocket.service';

@Component({
  selector: 'app-incs-details',
  templateUrl: './incs-details.component.html',
  styleUrls: ['./incs-details.component.css']
})
export class IncsDetailsComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();
  private routeChange$ = new Subject<void>();

  unitForm = new FormControl();
  units: string[] = [];

  inc: IncomingEntity;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private incService: IncManagerService,
    private web: WebsocketService,
  ) {
  }

  ngOnInit(): void {
    this.web.info().subscribe(info => {
      this.units = info.units;
    });
    this.route.paramMap.subscribe(params => {
      this.routeChange$.next();
      this.loading = true;
      this.incService.getInc(parseInt(params.get('id'), 10)).subscribe(inc => {
        this.inc = inc;
        this.unitForm.setValue(this.inc.slowestUnit);
        this.loading = false;
      });
      this.incService.incUpdates(parseInt(params.get('id'), 10))
      .pipe(takeUntil(this.routeChange$))
      .subscribe(inc => {
        this.inc = inc;
        this.unitForm.setValue(this.inc.slowestUnit);
      });
    });
    interval(1000).pipe(takeUntil(this.unsub$)).subscribe(num => {
      if (this.inc) {
        this.inc.remaining--;
      }
    });
    this.unitForm.valueChanges.pipe(debounceTime(500)).subscribe(unit => {
      if (this.inc && unit !== this.inc.slowestUnit) {
        this.incService.updateSlowest(this.inc.id, unit);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
    this.routeChange$.next();
    this.routeChange$.complete();
  }
}

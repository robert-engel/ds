import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {FormControl} from '@angular/forms';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay, takeUntil} from 'rxjs/operators';
import {RausstellManagerService} from '../../../service/rausstellmanager/rausstell-manager.service';
import {Village} from '../../../service/structures/village';

@Component({
  selector: 'app-rausstell-villages',
  templateUrl: './rausstell-villages.component.html',
  styleUrls: ['./rausstell-villages.component.css']
})
export class RausstellVillagesComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  villageForm = new FormControl();

  villages: Village[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  displayedColumns: string[] = ['village', 'delete'];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private rausstell: RausstellManagerService,
  ) {
  }

  ngOnInit(): void {
    this.rausstell.ignoredVillages().pipe(takeUntil(this.unsub$)).subscribe(villages => {
      this.villages = villages;
    });
    this.rausstell.ignoredVillage().pipe(takeUntil(this.unsub$)).subscribe(village => {
      this.villages = [village, ...this.villages];
    });
    this.rausstell.unignoredVillage().pipe(takeUntil(this.unsub$)).subscribe(village => {
      this.villages = this.villages.filter((value, index, array) => {
        return value.id !== village.id;
      });
    });
  }

  ignoreVillage(): void {
    if (this.villageForm.invalid) {
      return;
    }
    this.rausstell.ignoreVillage(this.villageForm.value.id);
  }

  unignoreVillage(id: number): void {
    this.rausstell.unignoreVillage(id);
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

}

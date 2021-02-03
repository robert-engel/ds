import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay, takeUntil} from 'rxjs/operators';
import {RausstellManagerService} from '../../../service/rausstellmanager/rausstell-manager.service';
import {Router} from '@angular/router';
import {WithdrawService} from '../../../service/withdraw/withdraw.service';

@Component({
  selector: 'app-rausstell-home',
  templateUrl: './rausstell-home.component.html',
  styleUrls: ['./rausstell-home.component.css']
})
export class RausstellHomeComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  troopForm = new FormControl();
  villageForm = new FormControl();
  utForm = new FormControl();
  incForm = new FormControl('', Validators.required);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private rausstell: RausstellManagerService,
    private router: Router,
    private withdrawService: WithdrawService,
  ) {
  }

  ngOnInit(): void {
    this.rausstell.troops().pipe(takeUntil(this.unsub$)).subscribe(troops => {
      this.troopForm.setValue(troops);
    });
  }

  withdraw(village: number): void {
    this.withdrawService.withdraw(village);
  }

  saveTroops(): void {
    this.troopForm.disable();
    this.rausstell.setTroops(this.troopForm.value);
    setTimeout(() => {
      this.troopForm.enable();
    }, 1000);
  }

  ignoreVillage(): void {
    if (this.villageForm.invalid) {
      return;
    }
    this.rausstell.ignoreVillage(this.villageForm.value.id);
    this.router.navigateByUrl('/rausstell/villages');
  }

  ignoreInc(): void {
    if (this.incForm.invalid) {
      return;
    }
    if (!(typeof this.incForm.value === 'number')) {
      return;
    }
    this.rausstell.ignoreInc(this.incForm.value);
    this.router.navigateByUrl('/rausstell/incs');
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DrivermanagerService} from '../../../service/drivermanager/drivermanager.service';
import {Subject} from 'rxjs';
import {AntiCaptchaService} from '../../../service/anti-captcha/anti-captcha.service';
import {AntiCaptchaSpending} from '../../../service/anti-captcha/structure/anti-captcha-spending';

import * as moment from 'moment';

@Component({
  selector: 'app-anti-captcha',
  templateUrl: './anti-captcha.component.html',
  styleUrls: ['./anti-captcha.component.css']
})
export class AntiCaptchaComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  enable = new FormControl(false);
  key = new FormControl('', Validators.required);

  balance = '---';
  spending: AntiCaptchaSpending[] = [];
  loading = true;

  displayedColumns = ['time', 'volume', 'money'];

  constructor(
    private driver: DrivermanagerService,
    private captcha: AntiCaptchaService,
  ) {
  }

  ngOnInit(): void {
    this.driver.config(this.unsub$).subscribe(config => {
      this.enable.setValue(config.antiCaptchaEnabled, {emitEvent: false});
      this.key.setValue(config.antiCaptchaKey);
      if (config.antiCaptchaKey?.length > 0) {
        this.loading = true;
        this.captcha.getSpending(config.antiCaptchaKey).subscribe(spending => {
          this.spending = spending.filter(spend => {
            return spend.volume > 0;
          });
          this.loading = false;
        });
        this.captcha.getBalance(config.antiCaptchaKey).subscribe(balance => {
          this.balance = balance.toString(10);
        });
      }
    });
    this.enable.valueChanges.subscribe(enabled => {
      this.driver.setEnabled(enabled);
    });
  }

  format(pFrom: number, pTill: number): string {
    const from = moment.unix(pFrom);
    const till = moment.unix(pTill);
    if (from.dayOfYear() === till.dayOfYear()) {
      return from.format('DD.MM.YYYY HH:mm') + ' - ' + till.format('HH:mm');
    } else {
      return from.format('DD.MM.YYYY HH:mm') + ' - ' + till.format('DD.MM.YYYY HH:mm');
    }
  }

  saveKey(): void {
    this.driver.setKey(this.key.value);
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

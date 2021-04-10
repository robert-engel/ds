import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DrivermanagerService} from '../../../service/drivermanager/drivermanager.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-anti-captcha',
  templateUrl: './anti-captcha.component.html',
  styleUrls: ['./anti-captcha.component.css']
})
export class AntiCaptchaComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  enable = new FormControl(false);
  key = new FormControl('', Validators.required);

  constructor(
    private driver: DrivermanagerService,
  ) {
  }

  ngOnInit(): void {
    this.driver.config(this.unsub$).subscribe(config => {
      this.enable.setValue(config.antiCaptchaEnabled, {emitEvent: false});
      this.key.setValue(config.antiCaptchaKey);
    });
    this.enable.valueChanges.subscribe(enabled => {
      this.driver.setEnabled(enabled);
    });
  }

  saveKey(): void {
    this.driver.setKey(this.key.value);
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

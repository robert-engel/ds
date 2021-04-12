import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AntiCaptchaSpending} from './structure/anti-captcha-spending';

@Injectable({
  providedIn: 'root'
})
export class AntiCaptchaService {

  constructor(
    private http: HttpClient
  ) {
  }

  getBalance(key: string): Observable<number> {
    return this.http.post<any>(
      'https://api.anti-captcha.com/getBalance',
      JSON.stringify({
        clientKey: key
      })
    ).pipe(map(resp => resp.balance));
  }

  getSpending(key: string): Observable<AntiCaptchaSpending[]> {
    return this.http.post<any>(
      'https://api.anti-captcha.com/getSpendingStats',
      JSON.stringify({
        clientKey: key
      })
    ).pipe(map(resp => resp.data));
  }
}

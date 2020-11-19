import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AdminInterceptor implements HttpInterceptor {

  constructor() {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.getAuthToken() === null) {
      return next.handle(request);
    }
    if (new URL(request.url).hostname !== 'tw.robertengel.io') {
      return next.handle(request);
    }
    return next.handle(request.clone({setHeaders: {Authorization: this.getAuthToken()}}));
  }

  getAuthToken(): string | null {
    return localStorage.getItem('tw.admin.auth.token');
  }
}

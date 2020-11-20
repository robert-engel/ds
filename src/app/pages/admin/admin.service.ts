import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Release} from './structures/release';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from './structures/user';
import {Download} from './structures/download';
import {Login} from './structures/login';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>('https://tw.robertengel.io/admin/user/users?id=' + id);
  }

  incrementValid(id: number, weeks: number, months: number): Observable<User> {
    return this.http.put<User>(
      'https://tw.robertengel.io/admin/user/users/' + id + '/valid/increment?weeks=' + weeks + '&months=' + months,
      new FormData()
    );
  }

  setName(id: number, name: string): Observable<User> {
    return this.http.put<User>(
      'https://tw.robertengel.io/admin/user/users/' + id + '/name?name=' + name,
      new FormData()
    );
  }

  addUser(id: number, name: string): Observable<User> {
    return this.http.post<User>('https://tw.robertengel.io/admin/user/users?id=' + id + '&name=' + name, new FormData());
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>('https://tw.robertengel.io/admin/user/users/' + id);
  }

  getUsers(max: number, first: number): Observable<User[]> {
    const parameters = new HttpParams()
    .set('first', first.toString(10))
    .set('max', max.toString(10));

    return this.http.get<User[]>('https://tw.robertengel.io/admin/user/users', {
      params: parameters
    });
  }

  getDownloads(uuid: string, max: number, first: number): Observable<Download[]> {
    const parameters = new HttpParams()
    .set('first', first.toString(10))
    .set('max', max.toString(10))
    .set('uuid', uuid);

    return this.http.get<Download[]>('https://tw.robertengel.io/admin/user/downloads', {
      params: parameters
    });
  }

  getLogins(id: number, max: number, first: number): Observable<Login[]> {
    const parameters = new HttpParams()
    .set('first', first.toString(10))
    .set('max', max.toString(10))
    .set('user', id.toString(10));

    return this.http.get<Login[]>('https://tw.robertengel.io/admin/user/logins', {
      params: parameters
    });
  }

  getNonMatchingLogins(max: number, first: number): Observable<Login[]> {
    const parameters = new HttpParams()
    .set('first', first.toString(10))
    .set('max', max.toString(10));

    return this.http.get<Login[]>('https://tw.robertengel.io/admin/user/logins/nonmatching', {
      params: parameters
    });
  }

  getReleases(): Observable<Release[]> {
    return this.http.get<Release[]>('https://tw.robertengel.io/admin/releases');
  }

  updateLatest(): Observable<any> {
    return this.http.post('https://tw.robertengel.io/admin/webhook', new FormData());
  }

  update(id: number): Observable<any> {
    return this.http.post('https://tw.robertengel.io/admin/update?id=' + id, new FormData());
  }

  getAuthToken(): string | null {
    return localStorage.getItem('tw.admin.auth.token');
  }

  setAuthToken(token: string): void {
    localStorage.setItem('tw.admin.auth.token', token);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.getAuthToken() == null) {
      return this.router.createUrlTree(['admin']);
    } else {
      return true;
    }
  }
}

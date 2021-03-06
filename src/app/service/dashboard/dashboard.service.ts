import {Injectable} from '@angular/core';
import {Observable, Subject, timer} from 'rxjs';
import {WebsocketService} from '../websocket.service';
import {GameData} from '../structures/game-data';
import {LoadProgress} from '../structures/load-progress';
import {StartBotPacket} from './packet/start-bot-packet';
import {StopBotPacket} from './packet/stop-bot-packet';
import {RefreshGameDataPacket} from './packet/refresh-game-data-packet';
import {WebSocketReconnectPacket} from './packet/web-socket-reconnect-packet';
import {WebSocketStatusPacket} from './packet/web-socket-status-packet';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {first, map, shareReplay} from 'rxjs/operators';
import {BotVersion} from '../structures/botVersion';
import {VersionRequest} from './packet/version-request';
import {ValidUntilRequest} from './packet/valid-until-request';
import {CookieCodeRequest} from './packet/cookie-code-request';

@Injectable({
  providedIn: 'root'
})
export class DashboardService implements CanActivate {

  running = false;

  private readonly versionSubject: Observable<BotVersion> = new Subject<BotVersion>();

  constructor(
    private webSocketService: WebsocketService,
    private router: Router,
  ) {
    webSocketService.observable('BotStatePacket').subscribe(state => {
      this.running = state.state === 'RUNNING';
    });
    this.versionSubject = this.webSocketService.observable('BotVersion', new VersionRequest())
    .pipe(shareReplay(1));
  }

  getCookieCode(): Observable<string> {
    return this.webSocketService.observable('DsCookiePacket', new CookieCodeRequest())
    .pipe(first(), map(resp => resp.code));
  }

  getValidUntil(): Observable<number> {
    return this.webSocketService.observable('ValidUntilPacket', new ValidUntilRequest())
    .pipe(map(resp => resp.validUntil));
  }

  getVersion(): Observable<BotVersion> {
    return this.versionSubject;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> {
    if (this.webSocketService.isConnected()) {
      if (this.isRunning()) {
        return true;
      } else {
        return timer(1000).pipe(map(num => {
          if (this.webSocketService.isConnected() && this.isRunning()) {
            return true;
          } else {
            return this.router.createUrlTree(['']);
          }
        }));
      }
    } else {
      return timer(1000).pipe(map(num => {
        if (this.webSocketService.isConnected() && this.isRunning()) {
          return true;
        } else {
          return this.router.createUrlTree(['']);
        }
      }));
    }
  }

  start(): void {
    this.webSocketService.sendData(new StartBotPacket());
  }

  stop(): void {
    this.webSocketService.sendData(new StopBotPacket());
    this.running = false;
  }

  websocketConnects(): Observable<any> {
    return this.webSocketService.observable('WebSocketConnectedEvent');
  }

  websocketDisconnects(): Observable<any> {
    return this.webSocketService.observable('WebSocketDisconnectedEvent');
  }

  websocketReconnect(): void {
    this.webSocketService.sendData(new WebSocketReconnectPacket());
  }

  websocketStatus(): void {
    this.webSocketService.sendData(new WebSocketStatusPacket());
  }

  refreshGameData(): void {
    this.webSocketService.sendData(new RefreshGameDataPacket());
  }

  gameData(): Observable<GameData> {
    return this.webSocketService.observable('GameData');
  }

  loadStarting(): Observable<any> {
    return this.webSocketService.observable('LoadStartingEvent');
  }

  loadProgress(): Observable<LoadProgress> {
    return this.webSocketService.observable('LoadProgressEvent');
  }

  loadFinished(): Observable<any> {
    return this.webSocketService.observable('LoadFinishedEvent');
  }

  isConnected(): boolean {
    return this.webSocketService.isConnected();
  }

  isRunning(): boolean {
    return this.isConnected() && this.running;
  }
}

import {Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {map, shareReplay, takeUntil} from 'rxjs/operators';
import {ErrorResponse} from './structures/error-response';
import {Packet} from './packet/packet';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../environments/environment';
import {WebsocketClientConnectionStatusRequest} from './packet/websocket-client-connection-status-request';
import {WebsocketClientConnectRequest} from './packet/websocket-client-connect-request';
import {WebsocketClientDisconnectRequest} from './packet/websocket-client-disconnect-request';
import {GetWebsocketClientKeyRequest} from './packet/get-websocket-client-key-request';
import {SetWebsocketClientKeyRequest} from './packet/set-websocket-client-key-request';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private subject: WebSocketSubject<any>;
  private connected: boolean;

  /*imageBase: string;
  units: string[];
  buildings: string[];*/

  infoObservable: Observable<any>;

  constructor(
    private toastr: ToastrService
  ) {
    this.setupWebSocket();
    this.infoObservable = this.observable('InformationPacket').pipe(shareReplay(1));
    this.infoObservable.subscribe();
    this.errors().subscribe(error => {
      this.toastr.error(error.message);
    });
  }

  private setupWebSocket(): void {
    if (sessionStorage.getItem('tw.token.use') !== null) {
      this.subject = webSocket({
        url: 'wss://ws.tw.robertengel.io',
        openObserver: {
          next: () => {
            this.connected = true;
            console.log('Connected');
          }
        },
        closeObserver: {
          next: () => {
            this.connected = false;
            console.log('disconnected');
          }
        }
      });
      this.subject.next({
        type: 'BROWSER',
        key: localStorage.getItem('tw.token'),
      });
    } else {
      this.subject = webSocket({
        url: 'ws://' + environment.ws + ':8888',
        openObserver: {
          next: () => this.connected = true
        },
        closeObserver: {
          next: () => this.connected = false
        }
      });
    }
  }

  refreshKey(): void {
    this.sendData(new SetWebsocketClientKeyRequest());
  }

  getKey(until: Observable<void>): Observable<string> {
    return this.observable('WebSocketClientKeyResponse', new GetWebsocketClientKeyRequest())
    .pipe(takeUntil(until), map(resp => resp.key));
  }

  connectLocal(): void {
    sessionStorage.removeItem('tw.token.use');
    location.reload();
  }

  connectExternal(token: string): void {
    localStorage.setItem('tw.token', token);
    sessionStorage.setItem('tw.token.use', 'true');
    location.reload();
  }

  isOpen(unsub: Observable<void>): Observable<boolean> {
    return this.observable('WebSocketClientConnectionResponse', new WebsocketClientConnectionStatusRequest())
    .pipe(takeUntil(unsub), map(resp => resp.connected));
  }

  open(): void {
    this.sendData(new WebsocketClientConnectRequest());
  }

  close(): void {
    this.sendData(new WebsocketClientDisconnectRequest());
  }

  info(): Observable<any> {
    return this.infoObservable;
  }

  errors(): Observable<ErrorResponse> {
    return this.observable('ErrorResponse');
  }

  isConnected(): boolean {
    return this.connected;
  }

  all(unsub: Observable<void>): Observable<string> {
    return this.subject.pipe(takeUntil(unsub));
  }

  raw(msg: string): void {
    this.subject.next(JSON.parse(msg));
  }

  sendData(packet: Packet): void {
    this.subject.next({
      type: packet.getName(),
      data: packet,
    });
  }

  observable(topic: string, openMessage?: Packet): Observable<any> {
    return this.multiplex(message => {
        return message.type === topic;
      },
      () => openMessage === undefined ? undefined : ({
        type: openMessage.getName(),
        data: openMessage,
      }),
      () => undefined,
    ).pipe(map(packet => packet.data));
  }

  multiplex(messageFilter: (value: any) => boolean, subMsg: () => any, unsubMsg: () => any): Observable<any> {
    const self = this.subject;
    return new Observable((observer: Observer<any>) => {
      try {
        const sub = subMsg();
        if (sub !== undefined) {
          self.next(sub);
        }
      } catch (err) {
        observer.error(err);
      }

      const subscription = self.subscribe(x => {
          try {
            if (messageFilter(x)) {
              observer.next(x);
            }
          } catch (err) {
            observer.error(err);
          }
        },
        err => observer.error(err),
        () => observer.complete());

      return () => {
        try {
          const unsub = unsubMsg();
          if (unsub !== undefined) {
            self.next(unsub);
          }
        } catch (err) {
          observer.error(err);
        }
        subscription.unsubscribe();
      };
    });
  }
}

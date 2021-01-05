import {Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {map, shareReplay} from 'rxjs/operators';
import {ErrorResponse} from './structures/error-response';
import {Packet} from './packet/packet';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../environments/environment';

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

  setHost(host: string): void {
    localStorage.setItem('tw.bot.host', host);
  }

  getHost(): string {
    const host = localStorage.getItem('tw.bot.host');
    if (host !== null) {
      return host;
    }
    return environment.ws;
  }

  private setupWebSocket(): void {
    this.subject = webSocket({
      url: 'ws://' + this.getHost() + ':8888',
      openObserver: {
        next: () => this.connected = true
      },
      closeObserver: {
        next: () => this.connected = false
      }
    });
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

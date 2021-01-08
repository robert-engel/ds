import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {WebsocketService} from '../../../service/websocket.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-bot-ip',
  templateUrl: './bot-ip.component.html',
  styleUrls: ['./bot-ip.component.css']
})
export class BotIpComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  control = new FormControl();

  open = false;
  key: string;

  constructor(
    private web: WebsocketService,
  ) {
  }

  ngOnInit(): void {
    this.web.isOpen(this.unsub$).subscribe(open => {
      this.open = open;
    });
    this.web.getKey(this.unsub$).subscribe(key => {
      this.key = key;
    });
    const token = localStorage.getItem('tw.token');
    if (token != null) {
      this.control.setValue(token);
    }
  }

  refreshKey(): void {
    this.web.refreshKey();
  }

  valid(): boolean {
    return this.control.value.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  }

  connectExternal(token: string): void {
    this.web.connectExternal(token);
  }

  connectLocal(): void {
    this.web.connectLocal();
  }

  openExternal(): void {
    this.web.open();
  }

  closeExternal(): void {
    this.web.close();
  }

  get connected(): boolean {
    return this.web.isConnected();
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

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

  constructor(
    private web: WebsocketService,
  ) {
  }

  ngOnInit(): void {
    this.web.isOpen(this.unsub$).subscribe(open => {
      this.open = open;
    });
    const token = localStorage.getItem('tw.token');
    if (token != null) {
      this.control.setValue(token);
    }
  }

  connectExternal(token: string): void {
    localStorage.setItem('tw.token', token);
    this.web.connectExternal(token);
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

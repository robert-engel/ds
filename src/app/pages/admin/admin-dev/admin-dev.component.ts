import {Component, OnDestroy, OnInit} from '@angular/core';
import {WebsocketService} from '../../../service/websocket.service';
import {Subject} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-admin-dev',
  templateUrl: './admin-dev.component.html',
  styleUrls: ['./admin-dev.component.css']
})
export class AdminDevComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  control = new FormControl();

  messages: string[] = [];

  constructor(
    private web: WebsocketService,
  ) {
  }

  ngOnInit(): void {
    this.web.all(this.unsub$).subscribe(msg => {
      this.messages.push(msg);
    });
  }

  send(message: string): void {
    this.web.raw(message);
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

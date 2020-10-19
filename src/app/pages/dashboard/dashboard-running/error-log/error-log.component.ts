import {Component, OnDestroy, OnInit} from '@angular/core';
import {ErrorResponse} from '../../../../service/structures/error-response';
import {Subject} from 'rxjs';
import {WebsocketService} from '../../../../service/websocket.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-error-log',
  templateUrl: './error-log.component.html',
  styleUrls: ['./error-log.component.css']
})
export class ErrorLogComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  errors: ErrorResponse[] = [];

  constructor(private websocketService: WebsocketService) {
  }

  ngOnInit(): void {
    this.websocketService.errors().pipe(takeUntil(this.unsub$)).subscribe(error => {
      this.errors = [
        ...this.errors,
        error,
      ];
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

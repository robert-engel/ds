import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {WithdrawSupportRequest} from './packet/withdraw-support-request';

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {

  constructor(private web: WebsocketService) {
  }

  withdraw(village: number): void {
    this.web.sendData(new WithdrawSupportRequest(village));
  }
}

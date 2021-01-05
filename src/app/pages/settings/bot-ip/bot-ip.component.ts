import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {WebsocketService} from '../../../service/websocket.service';

@Component({
  selector: 'app-bot-ip',
  templateUrl: './bot-ip.component.html',
  styleUrls: ['./bot-ip.component.css']
})
export class BotIpComponent implements OnInit {

  control = new FormControl();

  constructor(
    private web: WebsocketService,
  ) {
  }

  ngOnInit(): void {
    this.control.setValue(this.web.getHost());
  }

  save(): void {
    this.web.setHost(this.control.value);
    location.reload();
  }
}

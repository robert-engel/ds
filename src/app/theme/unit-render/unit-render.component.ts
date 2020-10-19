import {Component, Input, OnInit} from '@angular/core';
import {WebsocketService} from '../../service/websocket.service';

@Component({
  selector: 'app-unit-render',
  templateUrl: './unit-render.component.html',
  styleUrls: ['./unit-render.component.css']
})
export class UnitRenderComponent implements OnInit {

  @Input()
  value: string;
  units: string[];
  imagebase: string;

  constructor(private web: WebsocketService) {
  }

  ngOnInit(): void {
    this.web.infoObservable.subscribe(info => {
      this.units = info.units;
      this.imagebase = info.imageBase;
    });
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {WebsocketService} from '../../service/websocket.service';

@Component({
  selector: 'app-buildings-render',
  templateUrl: './buildings-render.component.html',
  styleUrls: ['./buildings-render.component.css']
})
export class BuildingsRenderComponent implements OnInit {

  @Input()
  value: { [building: string]: number };

  buildings: string[];
  imageBase: string;

  constructor(private web: WebsocketService) {
  }

  ngOnInit(): void {
    this.web.infoObservable.subscribe(info => {
      this.buildings = info.buildings;
      this.imageBase = info.imageBase;
    });
  }
}

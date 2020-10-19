import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WebsocketService} from '../../service/websocket.service';

@Component({
  selector: 'app-buildings-render',
  templateUrl: './buildings-render.component.html',
  styleUrls: ['./buildings-render.component.css']
})
export class BuildingsRenderComponent implements OnInit, OnChanges {

  @Input()
  value;
  imageBase: string;
  buildingsA: string[];
  buildingsB: string[];

  constructor(private web: WebsocketService) {
  }

  ngOnInit(): void {
    this.web.infoObservable.subscribe(info => {
      this.imageBase = info.imageBase;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const buildings = Object.keys(this.value);
    this.buildingsA = buildings.slice(0, Math.floor(buildings.length / 2));
    this.buildingsB = buildings.slice(Math.floor(buildings.length / 2) + 1, buildings.length);
  }
}

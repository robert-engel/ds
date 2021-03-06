import {Component, Input, OnInit} from '@angular/core';
import {WebsocketService} from '../../service/websocket.service';

@Component({
  selector: 'app-units-render',
  templateUrl: './units-render.component.html',
  styleUrls: ['./units-render.component.css']
})
export class UnitsRenderComponent implements OnInit {

  @Input()
  value: { [unit: string]: string };
  @Input()
  excludeUnits: string[] = [];
  units: string[];
  imagebase: string;

  constructor(private web: WebsocketService) {
  }

  ngOnInit(): void {
    this.web.infoObservable.subscribe(info => {
      this.units = info.units;
      this.units = this.units.filter(value => {
        return !this.excludeUnits.includes(value);
      });
      this.imagebase = info.imageBase;
    });
  }

}

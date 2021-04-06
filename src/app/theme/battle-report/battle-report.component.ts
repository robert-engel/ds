import {Component, Input, OnInit} from '@angular/core';
import {BattleReport} from '../../service/catapult/structure/battle-report';
import {WebsocketService} from '../../service/websocket.service';

@Component({
  selector: 'app-battle-report',
  templateUrl: './battle-report.component.html',
  styleUrls: ['./battle-report.component.css']
})
export class BattleReportComponent implements OnInit {

  @Input()
  value: BattleReport;

  buildings: { [building: string]: number };
  first: string[] = [];
  second: string[] = [];

  imageBase: string;

  constructor(private web: WebsocketService) {
  }

  ngOnInit(): void {
    this.buildings = JSON.parse(this.value.buildings);
    this.web.infoObservable.subscribe(info => {
      this.imageBase = info.imageBase;
      const keys = info.buildings.filter(key => {
        return this.buildings && this.buildings[key] > 0;
      });
      const half = Math.ceil(keys.length / 2);
      this.first = keys.slice(0, half);
      this.second = keys.slice(half);
    });
  }

}

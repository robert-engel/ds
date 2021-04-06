import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../service/structures/player';
import {Village} from '../../service/structures/village';
import {UnitsHolder} from '../../service/structures/units-holder';
import {WebsocketService} from '../../service/websocket.service';

@Component({
  selector: 'app-battle-report-troops',
  templateUrl: './battle-report-troops.component.html',
  styleUrls: ['./battle-report-troops.component.css']
})
export class BattleReportTroopsComponent implements OnInit {

  @Input()
  player: Player | undefined;
  @Input()
  village: Village | undefined;
  @Input()
  units: UnitsHolder | undefined;
  @Input()
  lost: UnitsHolder | undefined;
  @Input()
  defender = false;

  imageBase: string;
  unitNames: string[];

  constructor(private web: WebsocketService) {
  }

  ngOnInit(): void {
    this.web.infoObservable.subscribe(info => {
      this.imageBase = info.imageBase;
      this.unitNames = info.units;
    });
  }

}

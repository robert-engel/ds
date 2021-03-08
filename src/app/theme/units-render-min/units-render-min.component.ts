import {Component, Input, OnInit} from '@angular/core';
import {WebsocketService} from '../../service/websocket.service';

@Component({
  selector: 'app-units-render-min',
  templateUrl: './units-render-min.component.html',
  styleUrls: ['./units-render-min.component.css']
})
export class UnitsRenderMinComponent implements OnInit {

  @Input()
  value: { [unit: string]: any };
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

  get empty(): boolean {
    for (const unit of this.units) {
      if (this.value[unit] !== '0' && this.value[unit] !== 0) {
        return false;
      }
    }
    return true;
  }
}

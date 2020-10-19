import {Component, Input, OnInit} from '@angular/core';
import {Village} from '../../service/structures/village';
import {WebsocketService} from '../../service/websocket.service';

@Component({
  selector: 'app-village-render',
  templateUrl: './village-render.component.html',
  styleUrls: ['./village-render.component.css']
})
export class VillageRenderComponent implements OnInit {

  @Input()
  value: Village;

  world: string;

  constructor(private web: WebsocketService) {
  }

  ngOnInit(): void {
    this.web.info().subscribe(info => {
      this.world = info.world;
    });
  }

  get link(): string {
    if (this.world && this.value) {
      return 'https://' + this.world + '.die-staemme.de/game.php?screen=info_village&id=' + this.value.id;
    } else {
      return undefined;
    }
  }

  navigateTo(event: Event): void {
    if (this.world && this.value) {
      event.stopPropagation();
      const url = 'https://' + this.world + '.die-staemme.de/game.php?screen=info_village&id=' + this.value.id;
      window.open(url, '_blank');
    }
  }

}

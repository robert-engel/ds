import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {FarmRoute} from '../../../service/farm-route/structures/farm-route';
import {FarmRouteService} from '../../../service/farm-route/farm-route.service';
import {FarmRouteAddComponent} from './farm-route-add/farm-route-add.component';

@Component({
  selector: 'app-farm-route',
  templateUrl: './farm-route.component.html',
  styleUrls: ['./farm-route.component.css']
})
export class FarmRouteComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  routes: FarmRoute[];

  constructor(
    private farm: FarmRouteService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.farm.list(this.unsub$).subscribe(routes => {
      this.routes = routes;
    });
  }

  add(): void {
    this.dialog.open(FarmRouteAddComponent).afterClosed().subscribe(entity => {
      if (entity !== undefined) {
        this.routes.push(entity);
      }
    });
  }

  delete(id: number): void {
    this.routes = this.routes.filter(value => {
      return value.id !== id;
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {FarmRoute} from '../../../service/farm-route/structures/farm-route';
import {FarmRouteService} from '../../../service/farm-route/farm-route.service';
import {FarmRouteAddComponent} from './farm-route-add/farm-route-add.component';
import {FormControl} from '@angular/forms';
import {FarmTaskEntity} from '../../../service/farm/structures/farm-task-entity';
import {FarmRouteEditComponent} from './farm-route-edit/farm-route-edit.component';
import {FarmRouteConfig} from '../../../service/farm-route/structures/farm-route-config';

@Component({
  selector: 'app-farm-route',
  templateUrl: './farm-route.component.html',
  styleUrls: ['./farm-route.component.css']
})
export class FarmRouteComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  routes: FarmRoute[];
  slides: { [id: number]: FormControl } = {};
  config: FarmRouteConfig;
  autoDisableSlide = new FormControl(false);

  displayedColumns = ['toggle', 'interval', 'source', 'target', 'units', 'control'];

  constructor(
    private farm: FarmRouteService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.farm.config(this.unsub$).subscribe(config => {
      this.config = config;
      this.autoDisableSlide.setValue(config.autoDisable, {emitEvent: false});
    });
    this.autoDisableSlide.valueChanges.subscribe(value => {
      this.farm.setAutoDisable(value);
    });
    this.farm.list(this.unsub$).subscribe(routes => {
      this.routes = routes;
      for (const route of routes) {
        this.slides[route.id] = new FormControl(route.enabled);
        this.slides[route.id].valueChanges.subscribe(enabled => {
          this.farm.setTaskEnabled(route.id, enabled).subscribe();
        });
      }
    });
  }

  add(): void {
    this.dialog.open(FarmRouteAddComponent).afterClosed().subscribe(entity => {
      if (entity !== undefined) {
        this.routes = [
          ...this.routes,
          entity
        ];
        this.slides[entity.id] = new FormControl(entity.enabled);
        this.slides[entity.id].valueChanges.subscribe(enabled => {
          this.farm.setTaskEnabled(entity.id, enabled).subscribe();
        });
      }
    });
  }

  delete(id: number): void {
    this.farm.deleteEntity(id).subscribe(remove => {
      this.routes = this.routes.filter(value => {
        return value.id !== remove;
      });
    });
  }

  edit(task: FarmTaskEntity): void {
    this.dialog.open(FarmRouteEditComponent, {
      data: task
    }).afterClosed().subscribe(entity => {
      if (entity !== undefined) {
        this.routes = this.routes.map(mapTask => {
          return mapTask.id === task.id ? entity : mapTask;
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

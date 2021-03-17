import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {FarmRoute} from '../../../service/farm-route/structures/farm-route';
import {FarmRouteService} from '../../../service/farm-route/farm-route.service';
import {FarmRouteAddComponent} from './farm-route-add/farm-route-add.component';
import {FormControl} from '@angular/forms';
import {FarmTaskEntity} from '../../../service/farm/structures/farm-task-entity';
import {FarmRouteEditComponent} from './farm-route-edit/farm-route-edit.component';
import {FarmRouteConfig} from '../../../service/farm-route/structures/farm-route-config';
import {MatSort} from '@angular/material/sort';
import {FarmRouteDataSource} from './farm-route-data-source';

@Component({
  selector: 'app-farm-route',
  templateUrl: './farm-route.component.html',
  styleUrls: ['./farm-route.component.css']
})
export class FarmRouteComponent implements OnInit, OnDestroy, AfterViewInit {

  private unsub$ = new Subject<void>();

  dataSource: FarmRouteDataSource;

  slides: { [id: number]: FormControl } = {};
  config: FarmRouteConfig;
  autoDisableSlide = new FormControl(false);

  displayedColumns = ['toggle', 'distance', 'interval', 'source', 'target', 'units', 'control'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private farm: FarmRouteService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.dataSource = new FarmRouteDataSource(this.farm);
    this.farm.config(this.unsub$).subscribe(config => {
      this.config = config;
      this.autoDisableSlide.setValue(config.autoDisable, {emitEvent: false});
    });
    this.autoDisableSlide.valueChanges.subscribe(value => {
      this.farm.setAutoDisable(value);
    });
    this.dataSource.routes$.subscribe(routes => {
      for (const route of routes) {
        this.slides[route.id] = new FormControl(route.enabled);
        this.slides[route.id].valueChanges.subscribe(enabled => {
          route.enabled = enabled;
          this.farm.setTaskEnabled(route.id, enabled).subscribe();
        });
      }
    });
  }

  distance(task: FarmRoute): number {
    return Math.sqrt(Math.pow(task.target.x - task.source.x, 2) + Math.pow(task.target.y - task.source.y, 2));
  }

  add(): void {
    this.dialog.open(FarmRouteAddComponent).afterClosed().subscribe(entity => {
      if (entity !== undefined) {
        this.dataSource.add(entity);
        this.slides[entity.id] = new FormControl(entity.enabled);
        this.slides[entity.id].valueChanges.subscribe(enabled => {
          this.farm.setTaskEnabled(entity.id, enabled).subscribe();
        });
      }
    });
  }

  delete(id: number): void {
    this.farm.deleteEntity(id).subscribe(remove => {
      this.dataSource.remove(remove);
    });
  }

  edit(task: FarmTaskEntity): void {
    this.dialog.open(FarmRouteEditComponent, {
      data: task
    }).afterClosed().subscribe(entity => {
      if (entity !== undefined) {
        this.dataSource.edit(entity);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(sort => {
      this.dataSource.setSort(sort);
    });
  }
}

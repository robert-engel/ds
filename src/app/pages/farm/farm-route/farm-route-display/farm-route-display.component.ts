import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {FarmTaskEditComponent} from '../../farm-task-edit/farm-task-edit.component';
import {FarmRoute} from '../../../../service/farm-route/structures/farm-route';
import {FarmRouteService} from '../../../../service/farm-route/farm-route.service';

@Component({
  selector: 'app-farm-route-display',
  templateUrl: './farm-route-display.component.html',
  styleUrls: ['./farm-route-display.component.css']
})
export class FarmRouteDisplayComponent implements OnInit {

  internalRoute: FarmRoute;

  @Input()
  set route(route: FarmRoute) {
    this.internalRoute = route;
    this.slide.setValue(this.internalRoute.enabled, {emitEvent: false});
  }

  @Output()
  delete = new EventEmitter<number>();

  slide = new FormControl();

  constructor(
    private dialog: MatDialog,
    private farm: FarmRouteService,
  ) {
  }

  ngOnInit(): void {
    this.slide.valueChanges.subscribe(value => {
      this.farm.setTaskEnabled(this.internalRoute.id, value).subscribe();
    });
  }

  remove(): void {
    this.farm.deleteEntity(this.internalRoute.id).subscribe(id => {
      this.delete.emit(id);
    });
  }

  edit(): void {
    this.dialog.open(FarmTaskEditComponent, {
      data: this.internalRoute
    }).afterClosed().subscribe(entity => {
      if (entity !== undefined) {
        this.route = entity;
      }
    });
  }

}

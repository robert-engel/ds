import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {FarmRoute} from '../../../service/farm-route/structures/farm-route';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {FarmRouteService} from '../../../service/farm-route/farm-route.service';
import {finalize} from 'rxjs/operators';
import {Sort} from '@angular/material/sort';

export class FarmRouteDataSource extends DataSource<FarmRoute> {

  constructor(private farm: FarmRouteService) {
    super();
    this.loadingSubject.next(true);
    this.farm.list(this.unsub$)
    .pipe(finalize(() => this.loadingSubject.next(false)))
    .subscribe(routes => {
      this.routes = routes;
      this.routeSubject.next(routes);
    });
  }

  private unsub$ = new Subject<void>();
  private routeSubject = new BehaviorSubject<FarmRoute[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public routes: FarmRoute[] = [];
  private sort: Sort;

  public loading$ = this.loadingSubject.asObservable();
  public routes$ = this.routeSubject.asObservable();

  private static distance(task: FarmRoute): number {
    return Math.sqrt(Math.pow(task.target.x - task.source.x, 2) + Math.pow(task.target.y - task.source.y, 2));
  }

  setSort(sort: Sort): void {
    this.sort = sort;
    this.performSort();
  }

  private performSort(): void {
    if (this.sort && this.sort?.direction?.length > 0) {
      if (this.sort.active === 'distance') {
        this.routes = this.routes.sort((a, b) => {
          return FarmRouteDataSource.distance(a) - FarmRouteDataSource.distance(b);
        });
      }
      if (this.sort.active === 'interval') {
        this.routes = this.routes.sort((a, b) => {
          return a.timerInterval - b.timerInterval;
        });
      }
      if (this.sort.active === 'toggle') {
        this.routes = this.routes.sort((a, b) => {
          if (a.enabled === b.enabled) {
            return 0;
          }
          if (a.enabled === true) {
            return 1;
          }
          if (b.enabled === true) {
            return -1;
          }
          return a.timerInterval - b.timerInterval;
        });
      }
      if (this.sort.direction === 'desc') {
        this.routes = this.routes.reverse();
      }
    }
    this.routeSubject.next(this.routes);
  }

  add(route: FarmRoute): void {
    this.routes = [
      ...this.routes,
      route,
    ];
    this.performSort();
  }

  edit(route: FarmRoute): void {
    this.routes = this.routes.map(mapTask => {
      return mapTask.id === route.id ? route : mapTask;
    });
    this.performSort();
  }

  remove(id: number): void {
    this.routes = this.routes.filter(value => {
      return value.id !== id;
    });
    this.performSort();
  }

  connect(collectionViewer: CollectionViewer): Observable<FarmRoute[] | ReadonlyArray<FarmRoute>> {
    return this.routeSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.routeSubject.complete();
    this.loadingSubject.complete();
    this.unsub$.next();
    this.unsub$.complete();
  }

}

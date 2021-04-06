import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BabaInformation} from '../../../service/catapult/structure/baba-information';
import {BehaviorSubject, Observable} from 'rxjs';
import {CatapultService} from '../../../service/catapult/catapult.service';

export class BabaInfoDataSource extends DataSource<BabaInformation> {

  private infoSubject = new BehaviorSubject<BabaInformation[]>([]);
  private countSubject = new BehaviorSubject<number>(0);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();
  public count$ = this.countSubject.asObservable();

  constructor(
    private catapult: CatapultService,
  ) {
    super();
  }

  loadInfos(
    pFirst: number,
    pMax: number,
    pSort = '',
    pSortOrder = 'asc',
  ): void {
    this.loadingSubject.next(true);
    this.catapult.getBabaInfo(
      pFirst,
      pMax,
      pSort,
      pSortOrder,
    ).subscribe(infos => {
      this.loadingSubject.next(false);
      this.infoSubject.next(infos.list);
      this.countSubject.next(infos.count);
    });
  }

  connect(collectionViewer: CollectionViewer): Observable<BabaInformation[] | ReadonlyArray<BabaInformation>> {
    return this.infoSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.infoSubject.complete();
    this.loadingSubject.complete();
    this.countSubject.complete();
  }

}

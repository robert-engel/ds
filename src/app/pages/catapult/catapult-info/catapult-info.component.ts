import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CatapultService} from '../../../service/catapult/catapult.service';
import {BabaInformation} from '../../../service/catapult/structure/baba-information';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {CatapultReportPopupComponent} from '../catapult-report-popup/catapult-report-popup.component';
import {WebsocketService} from '../../../service/websocket.service';
import {BabaInfoDataSource} from './baba-info-data-source';
import {MatSort} from '@angular/material/sort';
import {merge} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-catapult-info',
  templateUrl: './catapult-info.component.html',
  styleUrls: ['./catapult-info.component.css']
})
export class CatapultInfoComponent implements OnInit, AfterViewInit {

  dataSource: BabaInfoDataSource;
  count: number;

  displayedColumns: string[] = ['id', 'report', 'points', 'nextActionTime', 'nextAction', 'delete'];

  world: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private catapult: CatapultService,
    private dialog: MatDialog,
    private web: WebsocketService,
  ) {
  }

  ngOnInit(): void {
    this.dataSource = new BabaInfoDataSource(this.catapult);
    this.dataSource.count$.subscribe(count => {
      this.count = count;
    });
    this.dataSource.loadInfos(0, 10);
    this.web.info().subscribe(info => {
      this.world = info.world;
    });
  }

  ngAfterViewInit(): void {
    // reset the paginator after sorting
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
      tap(() => this.pageUpdate())
    )
    .subscribe();
  }

  remove(id: number): void {
    this.catapult.deleteInfo(id);
  }

  link(village: number): string {
    if (this.world && village) {
      return 'https://' + this.world + '.die-staemme.de/game.php?screen=info_village&id=' + village;
    } else {
      return undefined;
    }
  }

  pageUpdate(): void {
    this.dataSource.loadInfos(
      this.paginator.pageIndex * this.paginator.pageSize,
      this.paginator.pageSize,
      this.sort.active,
      this.sort.direction
    );
  }

  openReport(info: BabaInformation): void {
    if (info.report) {
      this.dialog.open(CatapultReportPopupComponent, {
        data: info.report,
        minWidth: '518',
      });
    }
  }
}

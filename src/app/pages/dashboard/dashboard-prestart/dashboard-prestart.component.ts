import {Component, OnInit} from '@angular/core';
import {GameData} from '../../../service/structures/game-data';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {DashboardService} from '../../../service/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard-prestart',
  templateUrl: './dashboard-prestart.component.html',
  styleUrls: ['./dashboard-prestart.component.css']
})
export class DashboardPrestartComponent implements OnInit {

  private unsub$ = new Subject<void>();

  gameData: GameData;
  loading = false;
  progress: number;
  message: string;
  mode: string;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    this.dashboardService.gameData().pipe(takeUntil(this.unsub$)).subscribe(gameData => {
      this.gameData = gameData;
    });
  }

  start(): void {
    this.loading = true;
    this.mode = 'indeterminate';
    this.message = 'Starte Bot...';
    this.dashboardService.loadStarting().pipe(takeUntil(this.unsub$)).subscribe(() => {
      this.loading = true;
      this.mode = 'indeterminate';
      this.message = 'Starte Bot...';
    });
    this.dashboardService.loadProgress().pipe(takeUntil(this.unsub$)).subscribe(progress => {
      this.mode = progress.mode;
      this.message = progress.message;
      if (progress.percentage) {
        this.progress = progress.percentage;
      }
    });
    this.dashboardService.loadFinished().pipe(takeUntil(this.unsub$)).subscribe(() => {
      this.unsub$.next();
      this.unsub$.complete();
      this.loading = false;
    });
    this.dashboardService.start();
  }

  refresh(): void {
    this.dashboardService.refreshGameData();
  }

}

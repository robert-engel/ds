import {Component, OnDestroy, OnInit} from '@angular/core';
import {DashboardService} from '../../../../service/dashboard/dashboard.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Clipboard} from '@angular/cdk/clipboard';
import {GameData} from '../../../../service/structures/game-data';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  gameData: GameData;

  constructor(
    private dashboardService: DashboardService,
    private snackBar: MatSnackBar,
    private clipboard: Clipboard,
  ) {
  }

  ngOnInit(): void {
    this.dashboardService.gameData().pipe(takeUntil(this.unsub$)).subscribe(gameData => {
      this.gameData = gameData;
    });
    this.dashboardService.refreshGameData();
  }

  copy(): void {
    this.dashboardService.getCookieCode().subscribe(code => {
      this.clipboard.copy(code);
      this.snackBar.open('Kekse wurden kopiert.', 'Ok');
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

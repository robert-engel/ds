import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {AutoBuilderTemplateSummary} from '../../../service/auto-builder/structure/auto-builder-template-summary';
import {AutoBuilderService} from '../../../service/auto-builder/auto-builder.service';
import {AutoBuilderActiveVillage} from '../../../service/auto-builder/structure/auto-builder-active-village';
import {AutoBuilderAddVillageComponent} from '../auto-builder-add-village/auto-builder-add-village.component';
import {Village} from '../../../service/structures/village';
import {interval, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-auto-builder-detail',
  templateUrl: './auto-builder-detail.component.html',
  styleUrls: ['./auto-builder-detail.component.css']
})
export class AutoBuilderDetailComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  villages: AutoBuilderActiveVillage[] = [];

  columnsToDisplay: string[] = ['village', 'time', 'remaining', 'action'];
  isLoadingResults = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AutoBuilderTemplateSummary,
    private builder: AutoBuilderService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.isLoadingResults = true;
    this.builder.getActiveVillages(this.data.id).subscribe(villages => {
      this.villages = villages;
      this.isLoadingResults = false;
    });
    interval(1000).pipe(takeUntil(this.unsub$)).subscribe(num => {
      this.villages?.forEach((village, index, arr) => {
        if (arr[index].remaining > 0) {
          arr[index].remaining -= 1;
        }
      });
    });
    this.builder.buildRemovedEvent(this.unsub$).subscribe(id => {
      this.villages = this.villages.filter(village => {
        return village.village.id !== id;
      });
    });
    this.builder.buildScheduledEvent(this.unsub$).subscribe(activeVillage => {
      this.villages = this.villages.filter(village => {
        return village.village.id !== activeVillage.village.id;
      });
      this.villages = [
        ...this.villages,
        activeVillage,
      ];
      this.villages.sort((a, b) => {
        return a.remaining < b.remaining ? -1 : 1;
      });
    });
  }

  delete(village: Village): void {
    this.builder.stopBuild(village.id);
  }

  addVillage(template: AutoBuilderTemplateSummary): void {
    this.dialog.open(AutoBuilderAddVillageComponent, {
      data: template
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

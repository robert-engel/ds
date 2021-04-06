import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {BattleReport} from '../../../service/catapult/structure/battle-report';

@Component({
  selector: 'app-catapult-report-popup',
  templateUrl: './catapult-report-popup.component.html',
  styleUrls: ['./catapult-report-popup.component.css']
})
export class CatapultReportPopupComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: BattleReport,
  ) {
  }

  ngOnInit(): void {
  }

}

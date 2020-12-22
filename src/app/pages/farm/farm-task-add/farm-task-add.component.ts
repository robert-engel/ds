import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {FarmService} from '../../../service/farm/farm.service';

@Component({
  selector: 'app-farm-task-add',
  templateUrl: './farm-task-add.component.html',
  styleUrls: ['./farm-task-add.component.css']
})
export class FarmTaskAddComponent implements OnInit {

  form = this.fb.group({
    farmGroup: 'A',
    units: {},
    timerInterval: 30,
    maxDistance: 20,
  });
  nonFarmUnits = ['militia', 'ram', 'catapult', 'snob'];

  constructor(
    public dialogRef: MatDialogRef<FarmTaskAddComponent>,
    private fb: FormBuilder,
    private farm: FarmService,
  ) {
  }

  ngOnInit(): void {
  }

  submit(data): void {
    this.form.disable();
    this.farm.addEntity(
      data.farmGroup,
      data.units,
      data.timerInterval,
      data.maxDistance
    ).subscribe(entity => {
      this.dialogRef.close(entity);
    });
  }
}

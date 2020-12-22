import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FarmTaskEntity} from '../../../service/farm/structures/farm-task-entity';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {FarmService} from '../../../service/farm/farm.service';

@Component({
  selector: 'app-farm-task-edit',
  templateUrl: './farm-task-edit.component.html',
  styleUrls: ['./farm-task-edit.component.css']
})
export class FarmTaskEditComponent implements OnInit {

  form = this.fb.group({
    farmGroup: 'A',
    units: {},
    timerInterval: 30,
    maxDistance: 20,
  });
  villageForm = new FormControl(Validators.required);
  nonFarmUnits = ['militia', 'ram', 'catapult', 'snob'];
  displayedColumns: string[] = ['village', 'delete'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FarmTaskEntity,
    public dialogRef: MatDialogRef<FarmTaskEditComponent>,
    private fb: FormBuilder,
    private farm: FarmService,
  ) {
    this.form.setValue({
      farmGroup: data.farmGroup,
      units: data.units,
      timerInterval: data.timerInterval,
      maxDistance: data.maxDistance,
    });
  }

  ngOnInit(): void {
  }

  addVillage(): void {
    this.farm.addVillage(this.data.id, this.villageForm.value.id).subscribe(add => {
      this.data.villages = [
        ...this.data.villages,
        add.village,
      ];
    });
  }

  removeVillage(id: number): void {
    this.farm.removeVillage(this.data.id, id).subscribe(remove => {
      this.data.villages = this.data.villages.filter(village => {
        return village.id !== remove.id;
      });
    });
  }

  submit(data): void {
    this.form.disable();
    this.farm.editEntity(
      this.data.id,
      data.farmGroup,
      data.units,
      data.timerInterval,
      data.maxDistance
    ).subscribe(entity => {
      this.dialogRef.close(entity);
    });
  }

}

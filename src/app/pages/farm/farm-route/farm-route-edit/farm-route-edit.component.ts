import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FarmRoute} from '../../../../service/farm-route/structures/farm-route';
import {FarmRouteService} from '../../../../service/farm-route/farm-route.service';

@Component({
  selector: 'app-farm-route-edit',
  templateUrl: './farm-route-edit.component.html',
  styleUrls: ['./farm-route-edit.component.css']
})
export class FarmRouteEditComponent implements OnInit {

  form = this.fb.group({
    source: [undefined, Validators.required],
    target: [undefined, Validators.required],
    troops: {},
    timerInterval: [30, Validators.min(1)],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FarmRoute,
    public dialogRef: MatDialogRef<FarmRouteEditComponent>,
    private fb: FormBuilder,
    private farm: FarmRouteService,
  ) {
    this.form.setValue({
      source: data.source,
      target: data.target,
      timerInterval: data.timerInterval,
      troops: data.troops,
    });
  }

  ngOnInit(): void {
  }

  submit(data): void {
    this.form.disable();
    this.farm.editEntity(
      this.data.id,
      data.source.id,
      data.target.id,
      data.troops,
      data.timerInterval
    ).subscribe(entity => {
      this.dialogRef.close(entity);
    });
  }

}

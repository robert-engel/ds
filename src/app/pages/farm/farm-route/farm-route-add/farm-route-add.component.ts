import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, Validators} from '@angular/forms';
import {FarmRouteService} from '../../../../service/farm-route/farm-route.service';

@Component({
  selector: 'app-farm-route-add',
  templateUrl: './farm-route-add.component.html',
  styleUrls: ['./farm-route-add.component.css']
})
export class FarmRouteAddComponent implements OnInit {

  form = this.fb.group({
    source: [undefined, Validators.required],
    target: [undefined, Validators.required],
    troops: {},
    timerInterval: [30, Validators.min(1)],
  });

  constructor(
    public dialogRef: MatDialogRef<FarmRouteAddComponent>,
    private fb: FormBuilder,
    private farm: FarmRouteService,
  ) {
  }

  ngOnInit(): void {
  }

  submit(data): void {
    this.form.disable();
    this.farm.addEntity(
      data.source.id,
      data.target.id,
      data.troops,
      data.timerInterval
    ).subscribe(entity => {
      console.log('got route from service:');
      console.log(entity);
      this.dialogRef.close(entity);
    });
  }

}

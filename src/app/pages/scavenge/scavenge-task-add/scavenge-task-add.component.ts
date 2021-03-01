import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import {ScavengeService} from '../../../service/scavenge/scavenge.service';

@Component({
  selector: 'app-scavenge-task-add',
  templateUrl: './scavenge-task-add.component.html',
  styleUrls: ['./scavenge-task-add.component.css']
})
export class ScavengeTaskAddComponent implements OnInit {

  form = new FormControl({}, Validators.required);
  nonFarmUnits = ['militia', 'ram', 'catapult', 'snob', 'spy'];

  constructor(
    public dialogRef: MatDialogRef<ScavengeTaskAddComponent>,
    private scavenge: ScavengeService
  ) {
  }

  ngOnInit(): void {
  }

  submit(data): void {
    this.form.disable();
    this.scavenge.addTask(data);
  }

}

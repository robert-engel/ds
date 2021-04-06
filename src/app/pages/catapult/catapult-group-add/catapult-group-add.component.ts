import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CatapultService} from '../../../service/catapult/catapult.service';
import {MatDialogRef} from '@angular/material/dialog';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-catapult-group-add',
  templateUrl: './catapult-group-add.component.html',
  styleUrls: ['./catapult-group-add.component.css']
})
export class CatapultGroupAddComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  form = this.fb.group({
    amount: ['alle', Validators.required],
    range: 6,
  });

  constructor(
    public dialogRef: MatDialogRef<CatapultGroupAddComponent>,
    private fb: FormBuilder,
    private catapult: CatapultService,
  ) {
  }

  ngOnInit(): void {
    this.catapult.groupCreatedEvent(this.unsub$).subscribe(group => {
      if (this.form.disabled) {
        this.dialogRef.close(group);
      }
    });
  }

  submit(data): void {
    this.form.disable();
    this.catapult.createGroup(
      data.range,
      data.amount,
    );
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

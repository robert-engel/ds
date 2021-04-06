import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AutoCatapultVillageGroup} from '../../../service/catapult/structure/auto-catapult-village-group';
import {CatapultService} from '../../../service/catapult/catapult.service';

@Component({
  selector: 'app-catapult-group-edit',
  templateUrl: './catapult-group-edit.component.html',
  styleUrls: ['./catapult-group-edit.component.css']
})
export class CatapultGroupEditComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  slide = new FormControl(false);
  form = this.fb.group({
    amount: ['alle', Validators.required],
    range: 6,
  });
  villageForm = new FormControl('', Validators.required);
  massVillageForm = new FormControl('', Validators.required);
  displayedColumns: string[] = ['village', 'delete'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AutoCatapultVillageGroup,
    public dialogRef: MatDialogRef<CatapultGroupEditComponent>,
    private fb: FormBuilder,
    private catapult: CatapultService,
  ) {
    this.form.setValue({
      amount: data.amount,
      range: data.range,
    });
    this.slide.setValue(data.enabled, {emitEvent: false});
  }

  ngOnInit(): void {
    this.catapult.villageAddedEvent(this.unsub$).subscribe(data => {
      if (data.group === this.data.id) {
        this.data.villages = [
          ...this.data.villages,
          ...data.villages,
        ];
      }
    });
    this.catapult.villageRemovedEvent(this.unsub$).subscribe(data => {
      if (data.group === this.data.id) {
        this.data.villages = this.data.villages.filter(village => {
          return !data.villages.includes(village.id);
        });
      }
    });
    this.catapult.groupEditedEvent(this.unsub$).subscribe(group => {
      if (this.data.id === group.id) {
        this.dialogRef.close(group);
      }
    });
    this.slide.valueChanges.subscribe(value => {
      this.catapult.editGroup(
        this.data.id,
        value,
        this.data.range,
        this.data.amount
      );
    });
  }

  massAdd(): void {
    this.catapult.addVillages(this.data.id, this.massVillageForm.value);
  }

  massRemove(): void {
    this.catapult.removeVillages(this.data.id, this.massVillageForm.value);
  }

  addVillage(): void {
    this.catapult.addVillage(this.data.id, this.villageForm.value.id);
  }

  removeVillage(id: number): void {
    this.catapult.removeVillage(this.data.id, id);
  }

  submit(data): void {
    this.form.disable();
    this.catapult.editGroup(
      this.data.id,
      this.slide.value,
      data.range,
      data.amount
    );
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

}

import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ScavengeTask} from '../../../service/scavenge/structures/scavenge-task';
import {ScavengeService} from '../../../service/scavenge/scavenge.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-scavenge-task-edit',
  templateUrl: './scavenge-task-edit.component.html',
  styleUrls: ['./scavenge-task-edit.component.css']
})
export class ScavengeTaskEditComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  form = new FormControl({}, Validators.required);
  villageForm = new FormControl('', Validators.required);
  massVillageForm = new FormControl('', Validators.required);
  nonFarmUnits = ['militia', 'ram', 'catapult', 'snob', 'spy'];
  displayedColumns: string[] = ['village', 'delete'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ScavengeTask,
    public dialogRef: MatDialogRef<ScavengeTaskEditComponent>,
    private scavenge: ScavengeService,
    private toastr: ToastrService,
  ) {
    this.form.setValue(data.troops);
  }

  ngOnInit(): void {
    this.scavenge.taskEditEvent(this.unsub$).subscribe(task => {
      if (task.id === this.data.id) {
        this.toastr.success(
          `Erfolgreich bearbeitet.`,
          undefined,
          {
            timeOut: 7000,
          }
        );
        this.form.enable();
      }
    });
    this.scavenge.villageAddedEvent(this.unsub$).subscribe(data => {
      if (data.id === this.data.id) {
        this.data.villages = [
          ...this.data.villages,
          ...data.villages,
        ];
      }
    });
    this.scavenge.villageRemovedEvent(this.unsub$).subscribe(data => {
      if (data.id === this.data.id) {
        this.data.villages = this.data.villages.filter(village => {
          return !data.villages.includes(village.id);
        });
      }
    });
  }

  massAdd(): void {
    this.scavenge.massAddVillage(this.data.id, this.massVillageForm.value);
  }

  massRemove(): void {
    this.scavenge.massRemoveVillage(this.data.id, this.massVillageForm.value);
  }

  addVillage(): void {
    this.scavenge.addVillage(this.data.id, this.villageForm.value.id);
  }

  removeVillage(id: number): void {
    this.scavenge.removeVillage(this.data.id, id);
  }

  submit(data): void {
    this.form.disable();
    this.scavenge.editTask(
      this.data.id,
      data
    );
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

}

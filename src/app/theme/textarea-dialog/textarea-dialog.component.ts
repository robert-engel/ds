import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-textarea-dialog',
  templateUrl: './textarea-dialog.component.html',
  styleUrls: ['./textarea-dialog.component.css']
})
export class TextareaDialogComponent implements OnInit {

  control = new FormControl();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { name: string },
    public dialogRef: MatDialogRef<TextareaDialogComponent>,
  ) {
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close(this.control.value);
  }
}

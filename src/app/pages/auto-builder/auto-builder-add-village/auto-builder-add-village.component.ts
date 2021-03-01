import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AutoBuilderTemplate} from '../../../service/auto-builder/structure/auto-builder-template';
import {AutoBuilderService} from '../../../service/auto-builder/auto-builder.service';
import {FormControl} from '@angular/forms';
import {AutoBuilderTemplateSummary} from '../../../service/auto-builder/structure/auto-builder-template-summary';

@Component({
  selector: 'app-auto-builder-add-village',
  templateUrl: './auto-builder-add-village.component.html',
  styleUrls: ['./auto-builder-add-village.component.css']
})
export class AutoBuilderAddVillageComponent implements OnInit {

  form = new FormControl();
  template: AutoBuilderTemplate;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AutoBuilderTemplateSummary,
    private builder: AutoBuilderService,
  ) {
  }

  ngOnInit(): void {
    this.builder.getTemplate(this.data.id).subscribe(template => {
      this.template = template;
    });
  }

  addVillage(): void {
    this.builder.enable(this.form.value.id, this.data.id);
  }
}

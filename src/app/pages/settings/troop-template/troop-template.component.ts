import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {StandardTroopTemplate} from '../../../service/structures/standard-troop-template';
import {FormBuilder, Validators} from '@angular/forms';
import {CommandService} from '../../../service/command/command.service';

@Component({
  selector: 'app-troop-template',
  templateUrl: './troop-template.component.html',
  styleUrls: ['./troop-template.component.css']
})
export class TroopTemplateComponent implements OnInit {

  dataSource = new MatTableDataSource<StandardTroopTemplate>();
  selected: StandardTroopTemplate;

  columnsToDisplay = ['name', 'troops'];

  form = this.fb.group({
    name: ['', Validators.required],
    troops: [{}, Validators.required],
  });

  constructor(
    private command: CommandService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.command.getTroopTemplates().subscribe(templates => {
      this.dataSource.data = templates;
    });
  }

  add(data): void {
    this.command.addTroopTemplate(data.name, data.troops).subscribe(template => {
      this.dataSource.data = [...this.dataSource.data, template];
    });
  }

  edit(data): void {
    this.command.editTroopTemplate(this.selected.id, data.name, data.troops).subscribe(template => {
      this.dataSource.data = this.dataSource.data.filter((value, index, array) => {
        return value.id !== this.selected.id;
      });
      this.dataSource.data = [...this.dataSource.data, template];
    });
  }

  delete(): void {
    this.command.deleteTroopTemplate(this.selected.id);
    this.dataSource.data = this.dataSource.data.filter((value, index, array) => {
      return value.id !== this.selected.id;
    });
    this.selected = undefined;
  }

  select(template: StandardTroopTemplate): void {
    this.selected = template;
    this.form.setValue({
      name: template.name,
      troops: template.troops,
    });
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {FakeSelector} from '../../../../service/structures/fake-selector';
import {WebsocketService} from '../../../../service/websocket.service';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-fake-selector-table',
  templateUrl: './fake-selector-table.component.html',
  styleUrls: ['./fake-selector-table.component.css']
})
export class FakeSelectorTableComponent implements OnInit {

  privRows: FakeSelector[];

  @Input()
  set rows(rows: FakeSelector[]) {
    this.privRows = rows;
    this.selection.clear();
    this.selection.select(...rows);
  }

  get rows(): FakeSelector[] {
    return this.privRows;
  }

  selection = new SelectionModel<FakeSelector>(true, []);

  units: string[] = [];
  cols: string[] = [];

  constructor(
    private web: WebsocketService,
  ) {
  }

  ngOnInit(): void {
    this.web.info().subscribe(info => {
      this.units = info.units;
      this.cols = [
        'select',
        'available',
        'village',
        // ...this.units,
        'plan'
      ];
    });
  }

  isAllSelected(): boolean {
    return this.selection.selected.length === this.rows.length;
  }

  masterToggle(): void {
    this.isAllSelected() ? this.selection.clear() : this.rows.forEach(row => this.selection.select(row));
  }

}

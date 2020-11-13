import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VillageSelector} from '../../../../service/structures/village-selector';
import {SelectionModel} from '@angular/cdk/collections';
import {FormControl, FormGroup} from '@angular/forms';
import {VillageCount} from '../../../../service/structures/village-count';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-fake-selector-table',
  templateUrl: './fake-selector-table.component.html',
  styleUrls: ['./fake-selector-table.component.css']
})
export class FakeSelectorTableComponent implements OnInit {

  private unsub$ = new Subject<void>();
  rows: VillageSelector[];

  @Input()
  set selector(selector: VillageSelector[]) {
    this.rows = selector;
    this.selection.clear();
    this.unsub$.next();
    if (selector) {
      this.selection.select(...selector);
      const group: any = {};
      selector.forEach(row => {
        if (this.form) {
          if (this.form.value[row.village.id]) {
            group[row.village.id] = new FormControl(Math.min(row.max, this.form.value[row.village.id]));
          } else {
            group[row.village.id] = new FormControl(row.selected);
          }
        } else {
          group[row.village.id] = new FormControl(row.selected);
        }
      });
      this.form = new FormGroup(group);
      this.pushUpdate(this.form.value);
      this.form.valueChanges.pipe(takeUntil(this.unsub$)).subscribe(value => {
        this.pushUpdate(value);
      });
    }
  }

  get selector(): VillageSelector[] {
    return this.rows;
  }

  @Output()
  valueChange = new EventEmitter<VillageCount[]>(true);

  selection = new SelectionModel<VillageSelector>(true, []);

  form: FormGroup;
  setterForm = new FormControl(0);

  cols: string[] = ['select', 'village', 'plan'];

  constructor() {
  }

  ngOnInit(): void {
  }

  private pushUpdate(value): void {
    const arr = [];
    for (const entry of Object.entries(value)) {
      arr.push({
        village: parseInt(entry[0], 10),
        count: parseInt(entry[1] as string, 10),
      });
    }
    this.valueChange.emit(arr);
  }

  count(form): number {
    if (!form) {
      return 0;
    }
    if (!form.value) {
      return 0;
    }
    let sum = 0;
    for (const entry of Object.entries(form.value)) {
      sum += parseInt(entry[1] as string, 10);
    }
    return sum;
  }

  isAllSelected(): boolean {
    return this.selection.selected.length === this.selector.length;
  }

  masterToggle(): void {
    this.isAllSelected() ? this.selection.clear() : this.selector.forEach(row => this.selection.select(row));
  }

  increaseSelected(): void {
    const group: any = {};
    this.selection.selected.forEach(row => {
      group[row.village.id] = Math.min(row.max, this.form.value[row.village.id] + 1);
    });
    this.form.patchValue(group);
  }

  decreaseSelected(): void {
    const group: any = {};
    this.selection.selected.forEach(row => {
      group[row.village.id] = Math.max(0, this.form.value[row.village.id] - 1);
    });
    this.form.patchValue(group);
  }

  setSelected(val: number): void {
    const group: any = {};
    this.selection.selected.forEach(row => {
      group[row.village.id] = Math.min(Math.max(val, 0), row.max);
    });
    this.form.patchValue(group);
  }
}

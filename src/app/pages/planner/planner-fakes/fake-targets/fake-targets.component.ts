import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {VillageCount} from '../../../../service/structures/village-count';
import {VillageSelector} from '../../../../service/structures/village-selector';
import {FormControl, Validators} from '@angular/forms';
import {VillageService} from '../../../../service/village/village.service';
import {Village} from '../../../../service/structures/village';

@Component({
  selector: 'app-fake-targets',
  templateUrl: './fake-targets.component.html',
  styleUrls: ['./fake-targets.component.css']
})
export class FakeTargetsComponent implements OnInit {

  @Output()
  valueChange = new EventEmitter<VillageCount[]>();

  singleForm = new FormControl();
  multiForm = new FormControl('', Validators.required);

  loading = false;
  selector: VillageSelector[] = [];

  constructor(
    private villageService: VillageService,
  ) {
  }

  ngOnInit(): void {
  }

  addSingle(): void {
    if (!Array.isArray(this.selector)) {
      this.selector = [];
    }
    const pVillage: Village = this.singleForm.value;
    let found = false;
    this.selector.forEach(val => {
      if (val.village.id === pVillage.id) {
        found = true;
      }
    });

    if (found === false) {
      this.selector = [
        ...this.selector,
        {
          village: pVillage,
          max: 1000,
          selected: 1,
        }
      ];
    }
  }

  addMulti(): void {
    this.villageService.coordPaste(this.multiForm.value).subscribe(villages => {
      villages.forEach(vill => {
        let found = false;
        this.selector.forEach(val => {
          if (val.village.id === vill.id) {
            found = true;
          }
        });

        if (!found) {
          this.selector.push({
            village: vill,
            max: 1000,
            selected: 1,
          });
        }
      });
    });
  }
}

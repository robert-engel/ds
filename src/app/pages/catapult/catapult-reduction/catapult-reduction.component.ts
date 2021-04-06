import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AutoBuilderService} from '../../../service/auto-builder/auto-builder.service';
import {WebsocketService} from '../../../service/websocket.service';
import {BuildingInfo} from '../../../service/auto-builder/structure/building-info';
import {BuildingTask} from '../../../service/auto-builder/structure/building-task';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {CatapultService} from '../../../service/catapult/catapult.service';

@Component({
  selector: 'app-catapult-reduction',
  templateUrl: './catapult-reduction.component.html',
  styleUrls: ['./catapult-reduction.component.css']
})
export class CatapultReductionComponent implements OnInit {

  @Input()
  reductions: BuildingTask[];

  buildingForm = this.fb.group({
    building: [undefined, Validators.required],
    level: [1],
  });

  currentBuildingInfo: BuildingInfo;
  buildingInfos: { [building: string]: BuildingInfo };
  buildings: string[] = [];

  imageBase: string;

  constructor(
    public builder: AutoBuilderService,
    private catapult: CatapultService,
    private fb: FormBuilder,
    private web: WebsocketService,
  ) {
  }

  ngOnInit(): void {
    this.web.infoObservable.subscribe(info => {
      this.imageBase = info.imageBase;
      this.buildings = info.buildings;
    });
    this.buildingForm.get('building').valueChanges.subscribe(value => {
      this.currentBuildingInfo = this.buildingInfos[value];
    });
    this.builder.getBuildings().subscribe(buildings => {
      this.buildingInfos = buildings;
    });
  }

  addBuilding(value): void {
    this.reductions = [
      ...this.reductions,
      value
    ];
  }

  remove(building: string, level: number): void {
    this.reductions = this.reductions.filter(value => {
      return value.building !== building || value.level !== level;
    });
  }

  range(max: number, min: number = 0): ReadonlyArray<number> {
    return [...Array(max - min + 1).keys()].map(i => i + (min));
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.reductions, event.previousIndex, event.currentIndex);
  }

  save(): void {
    this.catapult.setReductions(this.reductions);
  }

}

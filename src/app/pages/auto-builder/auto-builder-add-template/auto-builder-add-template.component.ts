import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, Validators} from '@angular/forms';
import {AutoBuilderService} from '../../../service/auto-builder/auto-builder.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {BuildingTask} from '../../../service/auto-builder/structure/building-task';
import {WebsocketService} from '../../../service/websocket.service';
import {BuildingInfo} from '../../../service/auto-builder/structure/building-info';
import {Subject} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-auto-builder-add-template',
  templateUrl: './auto-builder-add-template.component.html',
  styleUrls: ['./auto-builder-add-template.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutoBuilderAddTemplateComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  nameForm = new FormControl('', Validators.required);
  templateForm = new FormControl([], (control: AbstractControl) => {
    if (!Array.isArray(control.value) || control.value.length === 0) {
      return {missing: 'Template fehlt.'};
    }
    return null;
  });

  buildingForm = this.fb.group({
    building: [undefined, Validators.required],
    level: [1],
  });

  tasks: BuildingTask[] = [];

  currentBuildingInfo: BuildingInfo;
  buildingInfos: { [building: string]: BuildingInfo };
  buildings: string[] = [];

  imageBase: string;

  constructor(
    public builder: AutoBuilderService,
    private fb: FormBuilder,
    private web: WebsocketService,
    private detector: ChangeDetectorRef,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.web.infoObservable.subscribe(info => {
      this.imageBase = info.imageBase;
      this.buildings = info.buildings;
    });
    this.templateForm.valueChanges.subscribe(value => {
      this.tasks = value;
    });
    this.buildingForm.get('building').valueChanges.subscribe(value => {
      this.currentBuildingInfo = this.buildingInfos[value];
    });
    this.builder.getBuildings().subscribe(buildings => {
      this.buildingInfos = buildings;
    });
    this.builder.addTemplateEvent(this.unsub$).subscribe(template => {
      if (template.name === this.nameForm.value) {
        this.nameForm.enable();
        this.toastr.success(
          `Template ${template.name} wurde hinzugefügt.`,
          undefined,
          {
            timeOut: 7000,
          }
        );
      }
    });
  }

  loadTemplate(): void {
    this.builder.getDefaultTemplate().subscribe(template => {
      this.templateForm.setValue(template.tasks);
      this.detector.detectChanges();
    });
  }

  addBuilding(value): void {
    this.templateForm.setValue(
      [
        ...this.templateForm.value,
        value
      ]
    );
  }

  remove(building: string, level: number): void {
    this.templateForm.setValue(
      this.templateForm.value.filter(value => {
        return value.building !== building || value.level !== level;
      })
    );
  }

  range(max: number, min: number = 0): ReadonlyArray<number> {
    return [...Array(max).keys()].map(i => i + 1);
  }

  drop(event: CdkDragDrop<string[]>): void {
    const array = this.templateForm.value;
    moveItemInArray(array, event.previousIndex, event.currentIndex);
    this.templateForm.setValue(array);
  }

  save(): void {
    this.nameForm.disable();
    this.builder.addTemplate(this.nameForm.value, this.templateForm.value);
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}

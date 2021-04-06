import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatapultRoutingModule } from './catapult-routing.module';
import { CatapultComponent } from './catapult.component';
import { CatapultHomeComponent } from './catapult-home/catapult-home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { CatapultGroupAddComponent } from './catapult-group-add/catapult-group-add.component';
import { CatapultGroupEditComponent } from './catapult-group-edit/catapult-group-edit.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ThemeModule} from '../../theme/theme.module';
import { CatapultInfoComponent } from './catapult-info/catapult-info.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CatapultReductionComponent } from './catapult-reduction/catapult-reduction.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { CatapultReportPopupComponent } from './catapult-report-popup/catapult-report-popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [CatapultComponent, CatapultHomeComponent, CatapultGroupAddComponent, CatapultGroupEditComponent, CatapultInfoComponent, CatapultReductionComponent, CatapultReportPopupComponent],
    imports: [
        CommonModule,
        CatapultRoutingModule,
        MatTabsModule,
        MatCardModule,
        MatSlideToggleModule,
        MatTableModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatSliderModule,
        MatFormFieldModule,
        MatInputModule,
        ThemeModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        DragDropModule,
        MatSelectModule,
        MatExpansionModule,
        MatDialogModule,
        MatSortModule
    ]
})
export class CatapultModule { }

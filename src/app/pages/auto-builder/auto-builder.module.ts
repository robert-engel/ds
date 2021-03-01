import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoBuilderRoutingModule } from './auto-builder-routing.module';
import { AutoBuilderComponent } from './auto-builder.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { AutoBuilderOverviewComponent } from './auto-builder-overview/auto-builder-overview.component';
import { AutoBuilderAddTemplateComponent } from './auto-builder-add-template/auto-builder-add-template.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import { AutoBuilderAddVillageComponent } from './auto-builder-add-village/auto-builder-add-village.component';
import {ThemeModule} from '../../theme/theme.module';
import { AutoBuilderDetailComponent } from './auto-builder-detail/auto-builder-detail.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [AutoBuilderComponent, AutoBuilderOverviewComponent, AutoBuilderAddTemplateComponent, AutoBuilderAddVillageComponent, AutoBuilderDetailComponent],
  imports: [
    CommonModule,
    AutoBuilderRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    MatInputModule,
    ThemeModule,
    MatProgressSpinnerModule,
    MatTableModule
  ]
})
export class AutoBuilderModule { }

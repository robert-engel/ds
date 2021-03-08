import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScavengeRoutingModule } from './scavenge-routing.module';
import { ScavengeComponent } from './scavenge.component';
import { ScavengeOverviewComponent } from './scavenge-overview/scavenge-overview.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { ScavengeTaskAddComponent } from './scavenge-task-add/scavenge-task-add.component';
import { ScavengeTaskEditComponent } from './scavenge-task-edit/scavenge-task-edit.component';
import {ThemeModule} from '../../theme/theme.module';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [ScavengeComponent, ScavengeOverviewComponent, ScavengeTaskAddComponent, ScavengeTaskEditComponent],
    imports: [
        CommonModule,
        ScavengeRoutingModule,
        MatTabsModule,
        MatCardModule,
        ThemeModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSlideToggleModule
    ]
})
export class ScavengeModule { }

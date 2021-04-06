import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MenuComponent} from './menu/menu.component';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {BuildingsRenderComponent} from './buildings-render/buildings-render.component';
import {UnitRenderComponent} from './unit-render/unit-render.component';
import {UnitsRenderComponent} from './units-render/units-render.component';
import {VillageRenderComponent} from './village-render/village-render.component';
import {UnitsInputComponent} from './units-input/units-input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {VillageInputComponent} from './village-input/village-input.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import {HmsPipe} from './hms.pipe';
import {UnitsHolderInputComponent} from './units-holder-input/units-holder-input.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmStopComponent } from './header/confirm-stop/confirm-stop.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TextareaDialogComponent } from './textarea-dialog/textarea-dialog.component';
import { UnitsRenderMinComponent } from './units-render-min/units-render-min.component';
import {MatChipsModule} from '@angular/material/chips';
import { BattleReportComponent } from './battle-report/battle-report.component';
import {MatCardModule} from '@angular/material/card';
import { BattleReportTroopsComponent } from './battle-report-troops/battle-report-troops.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    BuildingsRenderComponent,
    UnitRenderComponent,
    UnitsRenderComponent,
    VillageRenderComponent,
    UnitsInputComponent,
    VillageInputComponent,
    HmsPipe,
    UnitsHolderInputComponent,
    ConfirmStopComponent,
    TextareaDialogComponent,
    UnitsRenderMinComponent,
    BattleReportComponent,
    BattleReportTroopsComponent,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    VillageRenderComponent,
    UnitRenderComponent,
    UnitsInputComponent,
    UnitsRenderComponent,
    VillageInputComponent,
    HmsPipe,
    UnitsHolderInputComponent,
    BuildingsRenderComponent,
    UnitsRenderMinComponent,
    BattleReportComponent
  ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        RouterModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatMenuModule,
        MatTooltipModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatChipsModule,
        MatCardModule,
    ]
})
export class ThemeModule {
}

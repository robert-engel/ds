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


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    BuildingsRenderComponent,
    UnitRenderComponent,
    UnitsRenderComponent,
    VillageRenderComponent,
    UnitsInputComponent,
    VillageInputComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    VillageRenderComponent,
    UnitRenderComponent,
    UnitsInputComponent,
    UnitsRenderComponent,
    VillageInputComponent
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
    MatMenuModule
  ]
})
export class ThemeModule {
}

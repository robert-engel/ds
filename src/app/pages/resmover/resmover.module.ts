import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResmoverRoutingModule } from './resmover-routing.module';
import { ResmoverComponent } from './resmover.component';
import { ResmoverHomeComponent } from './resmover-home/resmover-home.component';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [ResmoverComponent, ResmoverHomeComponent],
  imports: [
    CommonModule,
    ResmoverRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule
  ]
})
export class ResmoverModule { }

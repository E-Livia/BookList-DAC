import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page/main-page.component';
import { MainPageRoutingModule } from './main-page-routing-module';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatTableModule
  ]
})
export class MainPageModule { }

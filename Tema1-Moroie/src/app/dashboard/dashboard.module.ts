import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HouseCardComponent } from './house-card/house-card.component';
import { BrowseComponent } from './browse/browse.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    HouseCardComponent,
    BrowseComponent
  ],
  imports: [
    CommonModule, DashboardRoutingModule, FormsModule
  ]
})
export class DashboardModule { }

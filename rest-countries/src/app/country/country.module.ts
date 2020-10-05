import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryListLayoutComponent } from './country-list-layout/country-list-layout.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountryTableComponent } from './country-table/country-table.component';
import { CountryGridListComponent } from './country-grid-list/country-grid-list.component';

@NgModule({
  declarations: [
    CountryListLayoutComponent, CountryDetailsComponent, 
    CountryTableComponent, CountryGridListComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    CountryRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CountryModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesResolver } from './countries.resolver';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryGridListComponent } from './country-grid-list/country-grid-list.component';
import { CountryTableComponent } from './country-table/country-table.component';
import { CountryResolver } from './country.resolver';
import { CountryListLayoutComponent } from './country-list-layout/country-list-layout.component';

const routes: Routes = [
  {
    path: 'country',
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: CountryListLayoutComponent,
        resolve: { countries: CountriesResolver },
        children: [
          { path: '', redirectTo: 'grid', pathMatch: 'full' },
          { path: 'grid', component: CountryGridListComponent },
          { path: 'table', component: CountryTableComponent },
        ],
      },
      {
        path: 'details/:name',
        component: CountryDetailsComponent,
        resolve: { country: CountryResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryRoutingModule {}

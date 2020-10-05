
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CountryService } from './country.service';

@Injectable({
  providedIn: 'root'
})
export class CountryResolver implements Resolve<any> {

  constructor(
    private countryService: CountryService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    // return true;
    const name = route.paramMap.get('name');
    // const country = route.data.countries.find(item => item.name === name)
    // return of(country);
    return this.countryService.getCountryByName(name);
  }
}


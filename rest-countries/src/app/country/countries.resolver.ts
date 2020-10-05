
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CountryService } from './country.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesResolver implements Resolve<any> {

  constructor(
    private countryService: CountryService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    
    return this.countryService.getAllCountries()
  }
}


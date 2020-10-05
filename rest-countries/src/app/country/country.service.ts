import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  API_URL = "https://restcountries.eu/rest/v2";
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllCountries() {
    return this.httpClient.get(`${this.API_URL}/all`)
  }

  getCountryByName(name: string){
    return this.httpClient.get(`${this.API_URL}/name/${encodeURIComponent(name)}`)
  }
}

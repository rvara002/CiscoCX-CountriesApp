import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  country: any = {}
  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      if(data && data.country && data.country.length) {
        this.country = data.country[0];
      }
    })
  }

  goBack() {
    this.location.back();
  }

  getKeyValueObject(name, obj?: any) {
    obj = obj || this.country[name];
    obj = Array.isArray(obj) ? obj[0] : obj;
    return Object.keys(obj).map(key => {
      return {
        key,
        value: obj[key],
        obj: obj,
        name
      }
    })
  }

}

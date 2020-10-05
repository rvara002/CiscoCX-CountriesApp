import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-country-grid-list',
  templateUrl: './country-grid-list.component.html',
  styleUrls: ['./country-grid-list.component.scss']
})
export class CountryGridListComponent implements OnInit {
  countries: any[] = [];
  dataSource: any[] = [];
  regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  constructor(
    private activedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activedRoute.parent.data
      .subscribe(data => {
        if(data && data.countries && data.countries.length) {
          this.countries = data.countries;
          this.dataSource = this.getFilteredData('');
        }
      });
  }

  applyRegionFilter(item) {
    this.dataSource = this.getFilteredData(item.value, 'region');
  }
  
  applyFilter(event: Event) {
    const term = (event.target as HTMLInputElement).value;
    this.dataSource = this.getFilteredData(term);
  }

  private getFilteredData(term: string, key:string='name') {
    return term 
      ? this.countries.filter(obj => {
        const regex = new RegExp(term, 'ig');
        return regex.test(obj[key]);
      })
      : this.countries;
  }

}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss']
})
export class CountryTableComponent implements OnInit {
  countries: any[] = [];
  dataSource: MatTableDataSource<any[]>;
  regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  displayedColumns = ['name', 'population', 'region', 'subregion', 'capital']
  constructor(
    private activedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activedRoute.parent.data.subscribe(data => {
      this.countries = data.countries;
      this.dataSource = new MatTableDataSource(this.countries);
    });
  }

  applyRegionFilter(item) {
    const filterValue = item.value || '';
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  _filter(term?: string, key:string='name') {
    return term 
      ? this.countries.filter(obj => {
        const regex = new RegExp(term, 'ig');
        return regex.test(obj[key]);
      })
      : this.countries;
  }

}

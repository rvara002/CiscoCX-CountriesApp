import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { AppMaterialModule } from 'src/app/material-module';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { CountryService } from '../country.service';
import { COUNTRY_DATA, TestCountryService } from '../test-country.service';

import { CountryTableComponent } from './country-table.component';

describe('CountryTableComponent', () => {
  let component: CountryTableComponent;
  let fixture: ComponentFixture<CountryTableComponent>;
  let activatedRoute = new ActivatedRouteStub();
  activatedRoute.parent = new ActivatedRouteStub();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMaterialModule, BrowserAnimationsModule],
      declarations: [ CountryTableComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: CountryService, useClass: TestCountryService},
      ]
    })
    .compileComponents();
  });

  beforeEach(async() => {
    activatedRoute.parent.setData({countries: COUNTRY_DATA});
    fixture = TestBed.createComponent(CountryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

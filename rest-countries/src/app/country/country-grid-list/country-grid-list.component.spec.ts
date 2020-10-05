import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from 'src/app/material-module';
import { ActivatedRoute, ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { CountryService } from '../country.service';
import { COUNTRY_DATA, TestCountryService } from '../test-country.service';

import { CountryGridListComponent } from './country-grid-list.component';

describe('CountryGridListComponent', () => {
  let component: CountryGridListComponent;
  let fixture: ComponentFixture<CountryGridListComponent>;
  let activatedRoute = new ActivatedRouteStub();
  activatedRoute.parent = new ActivatedRouteStub();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMaterialModule, BrowserAnimationsModule],
      declarations: [ CountryGridListComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: CountryService, useClass: TestCountryService},
      ]

    })
    .compileComponents();
  });

  beforeEach(async() => {
    activatedRoute.parent.setData({countries: COUNTRY_DATA})
    fixture = TestBed.createComponent(CountryGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

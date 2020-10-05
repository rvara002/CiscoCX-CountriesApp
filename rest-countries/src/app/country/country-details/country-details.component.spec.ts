import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMaterialModule } from 'src/app/material-module';
import { click } from 'src/testing';
import { ActivatedRoute, ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { CountryService } from '../country.service';
import { COUNTRY_DATA, TestCountryService } from '../test-country.service';

import { CountryDetailsComponent } from './country-details.component';

let component: CountryDetailsComponent;
let fixture: ComponentFixture<CountryDetailsComponent>;
let activatedRoute: ActivatedRouteStub;
let expectedCountry: {[key: string]: any};
let page: Page;

describe('CountryDetailsComponent', () => {
  
  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
  });
  beforeEach(async () => {
    const locationSpy = createLocationSpy();

    await TestBed.configureTestingModule({
      declarations: [ CountryDetailsComponent ],
      imports: [
        AppMaterialModule, RouterTestingModule,
        NoopAnimationsModule
      ],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: CountryService, useClass: TestCountryService},
        {provide: Location, useValue: locationSpy}
      ]
    })
    .compileComponents();
  });

  beforeEach(async() => {
    expectedCountry = COUNTRY_DATA[0];
    activatedRoute.setParamMap({name: expectedCountry.name});
    activatedRoute.setData({country: COUNTRY_DATA});
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    
    page = new Page();
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    
  });

  it('should create', () => {
    console.log("component", component.country);
    expect(component).toBeTruthy();
  });

  it('should display that country  name', () => {
    expect(page.nameDisplay.textContent).toBe(expectedCountry.name);
  });

  it('should navigate to list when click back', () => {
    const goBackSpy = spyOn(component, 'goBack')
    click(page.backBtn);
    expect(goBackSpy.calls.any()).toBe(true, 'router.navigate called');
  });

});

function createLocationSpy() {
  return jasmine.createSpyObj('Location', ['back']);
}

class Page {


  get buttons() {
    return this.queryAll<HTMLButtonElement>('button');
  }

  get backBtn() {
    return this.buttons[0];
  }

  get nameDisplay() {
    return this.query<HTMLElement>('mat-card-title');
  }

  private query<T>(selector: string): T {
    return fixture.nativeElement.querySelector(selector);
  }

  private queryAll<T>(selector: string): T[] {
    return fixture.nativeElement.querySelectorAll(selector);
  }
}


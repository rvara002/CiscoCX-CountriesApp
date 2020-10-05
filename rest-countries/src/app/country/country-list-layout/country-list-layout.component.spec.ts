import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from 'src/app/material-module';

import { CountryListLayoutComponent } from './country-list-layout.component';

describe('CountryListComponent', () => {
  let component: CountryListLayoutComponent;
  let fixture: ComponentFixture<CountryListLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMaterialModule],
      declarations: [ CountryListLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

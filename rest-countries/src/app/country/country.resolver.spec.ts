import { ActivatedRouteSnapshot } from '@angular/router';
import { ActivatedRouteSnapshotStub, ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { CountryResolver } from './country.resolver';
import { COUNTRY_DATA, TestCountryService } from './test-country.service';

describe('Country', () => {
  const countryResolver = new CountryResolver(new TestCountryService())
  let expectedCountry = COUNTRY_DATA[0];
  let route = new ActivatedRouteSnapshotStub({name: expectedCountry.name});
  it('should create an instance', () => {
    expect(countryResolver).toBeTruthy();
  });

  it('should resolve country data', async() => {
    const country = await countryResolver.resolve(route as any, null).toPromise();
    expect(country.length).toEqual(1, 'should have atleast one country');
  })


});

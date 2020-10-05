import { CountriesResolver } from './countries.resolver';
import { TestCountryService } from './test-country.service';

describe('Countries', () => {
  let countriesResolver = new CountriesResolver(new TestCountryService())
  
  it('should create an instance', () => {
    expect(countriesResolver).toBeTruthy();
  });

  it('should resolve countries', () => {
    countriesResolver.resolve(null, null)
      .subscribe(countries => 
        expect(countries.length).toEqual(1, 'should have atleast one country in array')
      )
  })

});

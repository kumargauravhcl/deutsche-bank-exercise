import * as fromCountries from '../country/+store/country.state';

export interface AppState {
  countries: fromCountries.CountryState;
}

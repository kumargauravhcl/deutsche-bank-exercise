import { AppState } from './app.state';
import { ActionReducerMap } from '@ngrx/store';
import * as fromCountries from '../country/+store/country.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  countries: fromCountries.CountryReducer
};

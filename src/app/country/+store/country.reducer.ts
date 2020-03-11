import * as countryActions from './country.action';
import { createReducer, on } from '@ngrx/store';
import * as countryState from './country.state';
export const intialState = countryState.initialState;

const reducer = createReducer(
  intialState,

  on(countryActions.SuccessGeCountriesAction, (state: countryState.CountryState, { regionCountries }) => {
    const array = state.regionWiseCountries.slice();
    const index = array.findIndex(x => x.region === regionCountries.region);
    if (index < 0) {
      array.push(regionCountries);
    } else {
      array[index].countries = [...regionCountries.countries];
    }
    return { ...state, regionWiseCountries: array };
  })
);

export function CountryReducer(state: countryState.CountryState | undefined, action: any) {
  return reducer(state, action);
}

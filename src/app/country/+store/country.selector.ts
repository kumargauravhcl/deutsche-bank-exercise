import { AppState } from '../../+store/app.state';
import * as fromCountryState from './country.state';
import { createSelector } from '@ngrx/store';

export const selectRegionParent = (state: AppState) => state.countries;
export const selectAllRegions = createSelector(selectRegionParent, (state: fromCountryState.CountryState) => state.regions);
export const selectAllCountriesByRegion = createSelector(
  selectRegionParent,
  (state: fromCountryState.CountryState) => state.regionWiseCountries
);
export const selectCountriesByRegion = createSelector(selectRegionParent, (state: fromCountryState.CountryState, props: any) => {
  if (state.regionWiseCountries) {
    return state.regionWiseCountries.find(x => x.region === props.region);
  } else {
    return null;
  }
});

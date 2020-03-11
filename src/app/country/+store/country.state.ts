import { IRegionCountry } from './../models/IRegionCountry';
import { ISelect } from '../models/ISelect';

export interface CountryState {
  regions: ISelect[];
  regionWiseCountries: IRegionCountry[];
}

export const initialState: CountryState = {
  regions: [
    { name: 'Asia', value: 'asia' },
    { name: 'Europe', value: 'europe' }
  ],
  regionWiseCountries: []
};

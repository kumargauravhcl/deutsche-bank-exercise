import { IRegionCountry } from './../models/IRegionCountry';
import { createAction, props } from '@ngrx/store';

// Get Region
export const BeginGetCountriesAction = createAction('[Region Dropdown] Begin Get Regions', props<{ region: string }>());
export const SuccessGeCountriesAction = createAction('[Region Dropdown] Success Get Regions', props<{ regionCountries: IRegionCountry }>());
export const ErrorGetCountriesAction = createAction('[Region Dropdown] Error Get Regions', props<{ error: any }>());

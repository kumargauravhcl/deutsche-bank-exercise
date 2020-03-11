import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, filter, withLatestFrom } from 'rxjs/operators';

import { IRegionCountry } from './../models/IRegionCountry';
import { ICountryDetails } from '../models/ICountryDetails';
import { AppState } from '../../+store/app.state';
import { CountryService } from '../services/country.service';
import * as CountryActions from './country.action';
import * as CountrySelector from './country.selector';

@Injectable()
export class CountryEffects {
  constructor(private store: Store<AppState>, private action$: Actions, private service: CountryService) {}

  GetCountriesByRegion$ = createEffect(() =>
    this.action$.pipe(
      ofType(CountryActions.BeginGetCountriesAction),
      withLatestFrom(this.store.pipe(select(CountrySelector.selectAllCountriesByRegion))),
      filter(([payload, regionWCountries]) => {
        return regionWCountries.findIndex(x => x.region === payload.region) < 0;
      }),
      mergeMap(([payload, countries]) => {
        // mergeMap(payload => {
        return this.service.getCountriesBybRegion(payload.region).pipe(
          map((list: ICountryDetails[]) => {
            const regionCountries: IRegionCountry = { region: payload.region, countries: list };
            return CountryActions.SuccessGeCountriesAction({ regionCountries });
          }),
          catchError((error: Error) => {
            return of(CountryActions.ErrorGetCountriesAction({ error }));
          })
        );
      })
    )
  );
}

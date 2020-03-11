import { ICountryDetails, Currency } from './../../models/ICountryDetails';
import { Subscription } from 'rxjs';
import { AppState } from './../../../+store/app.state';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISelect } from '../../models/ISelect';
import * as CountrySelector from '../../+store/country.selector';
import { BeginGetCountriesAction } from '../../+store/country.action';
import { IRegionCountry } from '../../models/IRegionCountry';

@Component({
  selector: 'app-country-container',
  templateUrl: './country-container.component.html',
  styleUrls: ['./country-container.component.scss']
})
export class CountryContainerComponent implements OnInit, OnDestroy {
  regionItems: ISelect[];
  countryItems: ISelect[];
  countryTableData: ICountryDetails[] = [];
  subs = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.AddAllRegionsSubscriptions();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  AddAllRegionsSubscriptions() {
    this.subs.add(
      this.store.pipe(select(CountrySelector.selectAllRegions)).subscribe((regions: ISelect[]) => {
        if (regions && regions.length > 0) {
          this.regionItems = regions;
        }
      })
    );
  }

  AddCountriesbyRegionSubscriptions(regionValue: string) {
    this.subs.add(
      this.store
        .pipe(select(CountrySelector.selectCountriesByRegion, { region: regionValue }))
        .subscribe((regionWiseCountries: IRegionCountry) => {
          if (regionWiseCountries) {
            this.countryItems = [];
            regionWiseCountries.countries.forEach(element => {
              this.countryItems.push({ name: element.name, value: element.name, data: element });
            });
          }
        })
    );
  }

  selectionChanged(evnt: ISelect, type: string) {
    this.countryTableData = [];
    if (type === 'Region') {
      if (evnt && evnt.value) {
        this.AddCountriesbyRegionSubscriptions(evnt.value);
        this.store.dispatch(BeginGetCountriesAction({ region: evnt.value }));
      } else {
        this.countryItems = [];
      }
    } else {
      this.countryTableData = [];
      evnt.data.currencies.forEach(element => {
        this.countryTableData.push({
          name: evnt.data.name,
          capital: evnt.data.capital,
          population: evnt.data.population,
          currency: element.name + ' [' + element.code + '] ',
          flag: evnt.data.flag
        });
      });
    }
  }
}

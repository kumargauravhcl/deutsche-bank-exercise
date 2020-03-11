import { map } from 'rxjs/operators';
import { HttpService } from '../../services/http.service';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ICountryDetails } from '../models/ICountryDetails';
import * as CC from '../country.constant';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {
  constructor(private httpService: HttpService) {}

  getCountriesBybRegion(region: string): Observable<ICountryDetails[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const endPoint = CC.GET_COUNTRIES_BY_REGION.replace('#REGION#', region.toLowerCase());
    const url = `${CC.BASE_ROUTE}/${endPoint}`;
    return this.httpService.get(url, { headers }).pipe(map(data => this.extractData(data)));
  }

  // Helper function
  public extractData(response: HttpResponse<any>): any {
    const body = response;
    return body || {};
  }
}

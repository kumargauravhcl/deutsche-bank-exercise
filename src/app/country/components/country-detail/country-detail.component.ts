import { ICountryDetails } from './../../models/ICountryDetails';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  displayedColumns: string[] = ['name', 'capital', 'population', 'currency', 'flag'];
  @Input() data: ICountryDetails[];

  constructor() {}

  ngOnInit(): void {}
}

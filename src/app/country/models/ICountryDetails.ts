export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface ICountryDetails {
  name: string;
  capital: string;
  region?: string;
  subregion?: string;
  population: number;
  currencies?: Currency[];
  currency?: string;
  flag: string;
}

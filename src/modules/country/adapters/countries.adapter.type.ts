interface ICountryApiResponse {
  borders: string[];
  capital: string[];
  cca3: string;
  currencies: { [k: string]: { name: string } };
  flags: {
    svg: string;
    alt: string;
  };
  languages: { [k: string]: string };
  name: {
    common: string;
    official: string;
    nativeName: { [k: string]: { common: string; offcial: string } };
  };
  population: number;
  region: string;
  subregion: string;
  tld: string[];
  altSpellings: string[];
}

type TCountriesApiResponse = ICountryApiResponse[];

export type { ICountryApiResponse, TCountriesApiResponse };

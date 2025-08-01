import { ICountryApiResponse } from "@country/adapters/countries.adapter.type";

const API_FIELDS_TO_BORDERS: (keyof ICountryApiResponse)[] = ["name", "cca3"];

const API_FIELDS_TO_COUNTRY_PREVIEW: (keyof ICountryApiResponse)[] = [
  ...API_FIELDS_TO_BORDERS,
  "flags",
  "region",
  "capital",
  "population",
  "altSpellings",
];

const API_FIELDS_TO_COUNTRY: (keyof ICountryApiResponse)[] = [
  ...API_FIELDS_TO_COUNTRY_PREVIEW,
  "subregion",
  "tld",
  "currencies",
  "languages",
  "borders",
];

export {
  API_FIELDS_TO_BORDERS,
  API_FIELDS_TO_COUNTRY,
  API_FIELDS_TO_COUNTRY_PREVIEW,
};

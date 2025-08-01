import { countriesAdapter } from "@country/adapters/countries.adapter";
import {
  ICountryApiResponse,
  TCountriesApiResponse,
} from "@country/adapters/countries.adapter.type";
import { countryAdapter } from "@country/adapters/country.adapter";
import {
  API_FIELDS_TO_BORDERS,
  API_FIELDS_TO_COUNTRY,
  API_FIELDS_TO_COUNTRY_PREVIEW,
} from "@country/constants/api-fields.const";
import { TCountryFilters } from "@country/types/country-filters.type";
import { ApiClient } from "@infrastructure/api/api-client.interface";
import { ApiPathEnum } from "@infrastructure/api/api-path.enum";
import { catchApiErrors } from "@infrastructure/api/wrappers/catch-api-errors";

import { CountryRepository } from "../country-repository.interface";

class CountryApiRepository implements CountryRepository {
  constructor(private readonly apiClient: ApiClient) {}

  getCountries = catchApiErrors(async (filters: TCountryFilters) => {
    const baseUrl = filters.name
      ? `${ApiPathEnum.COUNTRIES_BY_NAME}/${filters.name}`
      : ApiPathEnum.COUNTRIES;

    const url = `${baseUrl}?fields=${API_FIELDS_TO_COUNTRY_PREVIEW.join(",")}`;

    const response = await this.apiClient.get<TCountriesApiResponse>(url);

    return countriesAdapter(response, filters.name);
  });

  getCountry = catchApiErrors(async (id: string) => {
    const url = `${ApiPathEnum.COUNTRY}/${id}?fields=${API_FIELDS_TO_COUNTRY.join(",")}`;

    const response = await this.apiClient.get<ICountryApiResponse>(url);

    return countryAdapter(response, this._getBorderCountry);
  });

  _getBorderCountry = async (id: string): Promise<ICountryApiResponse> => {
    const url = `${ApiPathEnum.COUNTRY}/${id}?fields=${API_FIELDS_TO_BORDERS.join(",")}`;

    return await this.apiClient.get<ICountryApiResponse>(url);
  };
}

export { CountryApiRepository };

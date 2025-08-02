import { countriesAdapter } from "@country/adapters/countries.adapter";
import {
  ICountryApiResponse,
  TCountriesApiResponse,
} from "@country/adapters/countries.adapter.type";
import { countryAdapter } from "@country/adapters/country.adapter";
import { regionsAdapter } from "@country/adapters/regions.adapter";
import {
  API_FIELDS_TO_BORDERS,
  API_FIELDS_TO_COUNTRY,
  API_FIELDS_TO_COUNTRY_PREVIEW,
} from "@country/constants/api-fields.const";
import { TCountryFilters } from "@country/types/country-filters.type";
import { CountriesPreviewResponse } from "@country/types/country-preview.type";
import { ApiClient } from "@infrastructure/api/api-client.interface";
import { ApiPathEnum } from "@infrastructure/api/api-path.enum";
import { catchApiErrors } from "@infrastructure/api/wrappers/catch-api-errors";

import { CountryRepository } from "../country-repository.interface";

class CountryApiRepository implements CountryRepository {
  private _allCountriesApiResponse?: Promise<TCountriesApiResponse>;

  constructor(private readonly apiClient: ApiClient) {}

  getCountries = catchApiErrors(
    async (filters?: TCountryFilters): Promise<CountriesPreviewResponse> => {
      const countries = await (filters?.name
        ? this._getCountriesByName(filters.name)
        : this._getAllCountries());

      return countriesAdapter(countries, filters);
    },
  );

  getCountry = catchApiErrors(async (id: string) => {
    const url = `${ApiPathEnum.COUNTRY}/${id}?fields=${API_FIELDS_TO_COUNTRY.join(",")}`;

    const response = await this.apiClient.get<ICountryApiResponse>(url);

    return countryAdapter(response, this._getBorderCountry);
  });

  getRegions = catchApiErrors(async () =>
    regionsAdapter(await this._getAllCountries()),
  );

  _getAllCountries = () => {
    if (!this._allCountriesApiResponse) {
      const url = `${ApiPathEnum.COUNTRIES}?fields=${API_FIELDS_TO_COUNTRY_PREVIEW.join(",")}`;
      this._allCountriesApiResponse =
        this.apiClient.get<TCountriesApiResponse>(url);
    }

    return this._allCountriesApiResponse;
  };

  _getCountriesByName = async (name: string) => {
    const url = `${ApiPathEnum.COUNTRIES_BY_NAME}/${name}?fields=${API_FIELDS_TO_COUNTRY_PREVIEW.join(",")}`;

    try {
      return await this.apiClient.get<TCountriesApiResponse>(url);
    } catch (error: unknown) {
      if (
        error instanceof Error &&
        error.message === "Request failed with status code 404"
      )
        return [];

      throw error;
    }
  };

  _getBorderCountry = (id: string): Promise<ICountryApiResponse> => {
    const url = `${ApiPathEnum.COUNTRY}/${id}?fields=${API_FIELDS_TO_BORDERS.join(",")}`;

    return this.apiClient.get<ICountryApiResponse>(url);
  };
}

export { CountryApiRepository };

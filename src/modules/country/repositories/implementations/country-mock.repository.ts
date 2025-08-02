import { countriesAdapter } from "@country/adapters/countries.adapter";
import {
  ICountryApiResponse,
  TCountriesApiResponse,
} from "@country/adapters/countries.adapter.type";
import { countryAdapter } from "@country/adapters/country.adapter";
import { regionsAdapter } from "@country/adapters/regions.adapter";
import mockCountries from "@country/assets/countries.json";
import { TCountryFilters } from "@country/types/country-filters.type";
import { catchApiErrors } from "@infrastructure/api/wrappers/catch-api-errors";
import { delayApiMock } from "@infrastructure/api/wrappers/delay-api-mock";

import { CountryRepository } from "../country-repository.interface";

class CountryMockRepository implements CountryRepository {
  private readonly _mockCountries =
    mockCountries as unknown as TCountriesApiResponse;

  getCountries = delayApiMock(
    catchApiErrors((filters?: TCountryFilters) => {
      const name = filters?.name ?? "";
      const countries = this._mockCountries.filter(
        (country) =>
          country.name.common
            .toLocaleLowerCase()
            .includes(name.toLocaleLowerCase()) ||
          country.name.official
            .toLocaleLowerCase()
            .includes(name.toLocaleLowerCase()),
      );

      return Promise.resolve(countriesAdapter(countries, filters));
    }),
  );

  getCountry = delayApiMock(
    catchApiErrors(async (id: string) => {
      const countryResponse = this._mockCountries.find(
        ({ cca3 }) => cca3 === id,
      );

      if (!countryResponse) throw Error("Not found");

      return await countryAdapter(countryResponse, this._getBorderCountry);
    }),
  );

  getRegions = delayApiMock(
    catchApiErrors(() => Promise.resolve(regionsAdapter(this._mockCountries))),
  );

  _getBorderCountry = (id: string): Promise<ICountryApiResponse> => {
    const countryResponse = this._mockCountries.find(({ cca3 }) => cca3 === id);

    if (!countryResponse) throw Error("Not found");

    return Promise.resolve(countryResponse);
  };
}

export { CountryMockRepository };

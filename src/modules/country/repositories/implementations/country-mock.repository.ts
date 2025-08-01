import { countriesAdapter } from "@country/adapters/countries.adapter";
import {
  ICountryApiResponse,
  TCountriesApiResponse,
} from "@country/adapters/countries.adapter.type";
import { countryAdapter } from "@country/adapters/country.adapter";
import mockCountries from "@country/assets/countries.json";
import { TCountryFilters } from "@country/types/country-filters.type";
import { catchApiErrors } from "@infrastructure/api/wrappers/catch-api-errors";
import { delayApiMock } from "@infrastructure/api/wrappers/delay-api-mock";

import { CountryRepository } from "../country-repository.interface";

class CountryMockRepository implements CountryRepository {
  private readonly _mockCountries =
    mockCountries as unknown as TCountriesApiResponse;

  getCountries = delayApiMock(
    catchApiErrors(async (filters: TCountryFilters) => {
      const name = filters.name ?? "";
      const filteredCountries = this._mockCountries.filter(
        (country) =>
          country.name.common
            .toLocaleLowerCase()
            .includes(name.toLocaleLowerCase()) ||
          country.name.official
            .toLocaleLowerCase()
            .includes(name.toLocaleLowerCase()),
      );

      return countriesAdapter(filteredCountries);
    }),
  );

  getCountry = delayApiMock(
    catchApiErrors(async (id: string) => {
      const countryResponse = this._mockCountries.find(
        ({ cca3 }) => cca3 === id,
      );

      if (!countryResponse) throw Error("No found");

      return await countryAdapter(countryResponse, this._getBorderCountry);
    }),
  );

  _getBorderCountry = (id: string): Promise<ICountryApiResponse> => {
    const countryResponse = this._mockCountries.find(({ cca3 }) => cca3 === id);

    if (!countryResponse) throw Error("No found");

    return Promise.resolve(countryResponse);
  };
}

export { CountryMockRepository };

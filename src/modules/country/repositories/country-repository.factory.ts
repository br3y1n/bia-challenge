import { configEnvs } from "@constants/config-envs.const";
import { CountryImplementationEnum } from "@country/enums/country-implementation.enum";
import { TCountryFilters } from "@country/types/country-filters.type";
import { createApiClient } from "@infrastructure/api/api-client.factory";

import { CountryRepository } from "./country-repository.interface";
import { CountryApiRepository } from "./implementations/country-api.repository";
import { CountryMockRepository } from "./implementations/country-mock.repository";

class CountryRepositoryFactory implements CountryRepository {
  private _apiRepository?: CountryApiRepository;
  private _mockRepository?: CountryMockRepository;

  private _getRepository = (target: CountryImplementationEnum) => {
    const repositories = {
      [CountryImplementationEnum.MOCK]: () => {
        if (!this._mockRepository)
          this._mockRepository = new CountryMockRepository();

        return this._mockRepository!;
      },
      [CountryImplementationEnum.API]: () => {
        if (!this._apiRepository)
          this._apiRepository = new CountryApiRepository(
            createApiClient(configEnvs.COUNTRY_API),
          );

        return this._apiRepository!;
      },
    };

    return (
      repositories[target] ?? repositories[CountryImplementationEnum.MOCK]
    )();
  };

  getCountries = (filters?: TCountryFilters) =>
    this._getRepository(
      configEnvs.COUNTRY_TARGET as CountryImplementationEnum,
    ).getCountries(filters);

  getCountry = (id: string) =>
    this._getRepository(
      configEnvs.COUNTRY_TARGET as CountryImplementationEnum,
    ).getCountry(id);

  getRegions = () =>
    this._getRepository(
      configEnvs.COUNTRY_TARGET as CountryImplementationEnum,
    ).getRegions();
}

export { CountryRepositoryFactory };

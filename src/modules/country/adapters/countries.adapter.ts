import { TCountryFilters } from "@country/types/country-filters.type";
import { CountriesPreviewResponse } from "@country/types/country-preview.type";
import { ApiAdapterError } from "@infrastructure/api/errors/ApiAdapterError";
import { formatNumber } from "@utils/format-number";

import { TCountriesApiResponse } from "./countries.adapter.type";

const countriesAdapter = (
  countriesApiResponse: TCountriesApiResponse,
  filters?: TCountryFilters,
): CountriesPreviewResponse => {
  try {
    const nameMatch = filters?.name ?? "";
    const preFilteredCountries = filters?.region
      ? countriesApiResponse.filter(({ region }) => region === filters.region)
      : countriesApiResponse;

    const totalCountries = preFilteredCountries.length;
    const limit = filters?.limit ?? totalCountries;
    const page = filters?.page ?? 1;
    const offsetMin = (page - 1) * limit;
    const offsetMax = offsetMin + limit;
    const pages = Math.ceil(totalCountries / limit);
    const filteredCountries = preFilteredCountries.slice(offsetMin, offsetMax);
    const previewCountries = filteredCountries.map(
      ({ capital, altSpellings, cca3, flags, name, population, region }) => ({
        flag: { alt: flags.alt, src: flags.svg },
        capital: capital.join(", "),
        id: cca3,
        name: {
          common: name.common,
          match: [name.common, name.official, ...altSpellings].find(
            (currentMatch) =>
              currentMatch
                .toLocaleLowerCase()
                .includes(nameMatch.toLocaleLowerCase()),
          )!,
        },
        population: formatNumber(population),
        region: region,
      }),
    );

    return {
      pages,
      countries: previewCountries,
      total: totalCountries,
    };
  } catch (error: unknown) {
    throw new ApiAdapterError(
      error instanceof Error ? error.message : "Unknown adapter error",
    );
  }
};

export { countriesAdapter };

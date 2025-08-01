import { CountryPreview } from "@country/types/country-preview.type";
import { ApiAdapterError } from "@infrastructure/api/errors/ApiAdapterError";
import { formatNumber } from "@utils/format-number";

import { TCountriesApiResponse } from "./countries.adapter.type";

const countriesAdapter = (
  countriesApiResponse: TCountriesApiResponse,
  nameMatch: string = "",
): CountryPreview[] => {
  try {
    return countriesApiResponse.map(
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
  } catch (error: unknown) {
    throw new ApiAdapterError(
      error instanceof Error ? error.message : "Unknown adapter error",
    );
  }
};

export { countriesAdapter };

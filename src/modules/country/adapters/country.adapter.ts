import { Country, IBorderCountry } from "@country/types/country.type";
import { ApiAdapterError } from "@infrastructure/api/errors/ApiAdapterError";
import { formatNumber } from "@utils/format-number";

import { ICountryApiResponse } from "./countries.adapter.type";
const getAllBorderCountriesByIds = async (
  borderIds: string[],
  getBorderCountry: (id: string) => Promise<ICountryApiResponse>,
): Promise<ICountryApiResponse[]> =>
  await Promise.all(borderIds.map((id: string) => getBorderCountry(id)));

const mapBorders = async (
  borderIds: string[],
  getBorderCountry: (id: string) => Promise<ICountryApiResponse>,
): Promise<IBorderCountry[]> => {
  const borders = await getAllBorderCountriesByIds(borderIds, getBorderCountry);

  return borders.map(({ cca3, name }) => ({
    name: name.common,
    id: cca3,
  }));
};

const countryAdapter = async (
  {
    borders,
    capital,
    cca3,
    currencies,
    flags,
    languages,
    name,
    population,
    region,
    subregion,
    tld,
  }: ICountryApiResponse,
  getBorderCountry: (id: string) => Promise<ICountryApiResponse>,
): Promise<Country> => {
  try {
    return {
      name: {
        common: name.common,
        official: name.official,
        native: Object.values(name.nativeName)[0]?.common ?? "",
      },
      capital: capital.join(", "),
      currencies: Object.values(currencies).map(({ name }) => name),
      id: cca3,
      population: formatNumber(population),
      region: region,
      tld: tld.join(", "),
      subregion: subregion,
      languages: Object.values(languages),
      flag: {
        src: flags.svg,
        alt: flags.alt,
      },
      borders: await mapBorders(borders, getBorderCountry),
    };
  } catch (error: unknown) {
    throw new ApiAdapterError(
      error instanceof Error ? error.message : "Unknown adapter error",
    );
  }
};

export { countryAdapter };

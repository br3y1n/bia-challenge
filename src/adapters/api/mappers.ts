import { formatNumber } from "@utils";
import ICountryFullEntity from "@entities/countryFull.entity";
import ICountryPreviewEntity from "@entities/countryPreview.entity";
import { IApiCountry } from "./api.interfaces";
import { getCountriesByIdsApi } from "./api";

const mapCountryPreview = (apiCountry: IApiCountry): ICountryPreviewEntity => ({
  name: {
    common: apiCountry.name.common,
    official: apiCountry.name.official,
  },
  id: apiCountry.cca3,
  capital: apiCountry.capital.join(", "),
  flag: {
    src: apiCountry.flags.svg,
    alt: apiCountry.flags.alt,
  },
  population: formatNumber(apiCountry.population),
  region: apiCountry.region,
});

const mapCountryFull = async (
  apiCountry: IApiCountry,
): Promise<ICountryFullEntity> => ({
  name: {
    common: apiCountry.name.common,
    official: apiCountry.name.official,
    native: Object.values(apiCountry.name.nativeName)[0]?.common ?? "",
  },
  capital: apiCountry.capital.join(", "),
  currencies: Object.values(apiCountry.currencies).map(({ name }) => name),
  id: apiCountry.cca3,
  population: formatNumber(apiCountry.population),
  region: apiCountry.region,
  tld: apiCountry.tld.join(", "),
  subregion: apiCountry.subregion,
  languages: Object.values(apiCountry.languages),
  flag: {
    src: apiCountry.flags.svg,
    alt: apiCountry.flags.alt,
  },
  borders: await mapBorders(apiCountry.borders),
});

const mapBorders = async (borderIds: string[]) => {
  const borders = await getCountriesByIdsApi(borderIds);

  return borders.map(({ cca3, name }) => ({
    name: name.common,
    id: cca3,
  }));
};

export { mapBorders, mapCountryFull, mapCountryPreview };

import { TCountriesApiResponse } from "./countries.adapter.type";

const regionsAdapter = (allCountries: TCountriesApiResponse) => {
  const regions = new Set<string>();

  allCountries.forEach(({ region }) => {
    regions.add(region);
  });

  return [...regions];
};

export { regionsAdapter };

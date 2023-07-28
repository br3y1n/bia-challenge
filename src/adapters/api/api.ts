import ICountryFullEntity from "@entities/countryFull.entity";
import ICountryPreviewEntity from "@entities/countryPreview.entity";
import { IApiCountry, IFetcher } from "./api.interfaces";
import { mapCountryPreview, mapCountryFull } from "./mappers";
import { ApiRouteEnum } from "@enums";

const fetcher: IFetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) throw Error;

  return await response.json();
};

const getCountriesUrl = (name: string) => {
  const urlForName = `${process.env.NEXT_PUBLIC_API}${ApiRouteEnum.NAME}/${name}`;
  const urlForAll = `${process.env.NEXT_PUBLIC_API}${ApiRouteEnum.ALL}`;

  if (name === "") return urlForAll;

  return urlForName;
};

const fieldsToBorders: (keyof IApiCountry)[] = ["name", "cca3"];

const fieldsToPreview: (keyof IApiCountry)[] = [
  ...fieldsToBorders,
  "flags",
  "region",
  "capital",
  "population",
  "altSpellings",
];

const fieldsToFull: (keyof IApiCountry)[] = [
  ...fieldsToPreview,
  "subregion",
  "tld",
  "currencies",
  "languages",
  "borders",
];

const getCountriesByApi = async (
  name: string,
): Promise<ICountryPreviewEntity[]> => {
  try {
    const fields = fieldsToPreview.join(",");
    const api = getCountriesUrl(name);
    const url = `${api}?fields=${fields}`;
    const apiCountries = await fetcher<IApiCountry[]>(url);

    return apiCountries.map((apiCountry) =>
      mapCountryPreview(apiCountry, name),
    );
  } catch {
    return [];
  }
};

const getCountriesByIdsApi = async (
  borderIds: string[],
): Promise<Pick<IApiCountry, "cca3" | "name">[]> =>
  await Promise.all(
    borderIds.map((id: string) => {
      const fields = fieldsToBorders.join(",");
      const api = `${process.env.NEXT_PUBLIC_API}${ApiRouteEnum.ID}`;
      const url = `${api}/${id}?fields=${fields}`;

      return fetcher<Pick<IApiCountry, "cca3" | "name">>(url);
    }),
  );

const getCountryByIdApi = async (
  id: string,
): Promise<ICountryFullEntity | undefined> => {
  try {
    const fields = fieldsToFull.join(",");
    const api = `${process.env.NEXT_PUBLIC_API}${ApiRouteEnum.ID}`;
    const url = `${api}/${id}?fields=${fields}`;
    const apiCountry = await fetcher<IApiCountry>(url);

    return mapCountryFull(apiCountry);
  } catch {}
};

export { getCountriesByApi, getCountryByIdApi, getCountriesByIdsApi };

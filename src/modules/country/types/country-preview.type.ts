import { Country } from "./country.type";

type CountryPreview = Pick<
  Country,
  "population" | "id" | "region" | "capital" | "flag"
> & { name: { common: string; match: string } };

interface CountriesPreviewResponse {
  countries: CountryPreview[];
  total: number;
  pages: number;
}

export type { CountryPreview, CountriesPreviewResponse };

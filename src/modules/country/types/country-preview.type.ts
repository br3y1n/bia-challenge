import { Country } from "./country.type";

type CountryPreview = Pick<
  Country,
  "population" | "id" | "region" | "capital" | "flag"
> & { name: { common: string; match: string } };

export type { CountryPreview };

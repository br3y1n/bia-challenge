import ICountryFullEntity from "./countryFull.entity";

type ICountryPreviewEntity = Pick<
  ICountryFullEntity,
  "population" | "id" | "region" | "capital" | "flag"
> & { name: { common: string; match: string } };

export default ICountryPreviewEntity;

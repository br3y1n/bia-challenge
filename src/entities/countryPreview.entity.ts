import ICountryFullEntity from "./countryFull.entity";

type ICountryPreviewEntity = Pick<
  ICountryFullEntity,
  "population" | "id" | "region" | "capital" | "flag"
> & { name: { common: string; official: string } };

export default ICountryPreviewEntity;

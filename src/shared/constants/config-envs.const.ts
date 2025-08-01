import { CountryImplementationEnum } from "@country/enums/country-implementation.enum";

const configEnvs = {
  COUNTRY_API: process.env.NEXT_PUBLIC_COUNTRY_API ?? "",

  COUNTRY_TARGET:
    process.env.NEXT_PUBLIC_COUNTRY_TARGET ?? CountryImplementationEnum.MOCK,

  MOCK_DELAY_RESPONSE_MS: Number(
    process.env.NEXT_PUBLIC_MOCK_DELAY_RESPONSE_MS ?? 500,
  ),

  NUMBER_RETRIES_REQUEST: Number(
    process.env.NEXT_PUBLIC_NUMBER_RETRIES_REQUEST ?? 2,
  ),

  BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
};

export { configEnvs };

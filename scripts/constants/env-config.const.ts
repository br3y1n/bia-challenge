import { EnvConfig } from "../scripts.type";
import { CliFlagEnum } from "../enums/cli-flag.enum";
import { CountryImplementationEnum } from "@country/enums/country-implementation.enum";

const ENVS_CONFIG: Record<string, EnvConfig> = {
  NEXT_PUBLIC_COUNTRY_TARGET: {
    options: Object.values(CountryImplementationEnum),
    default: CountryImplementationEnum.MOCK,
    flagName: CliFlagEnum.WITH_COUNTRY_TARGET,
  },
};

export { ENVS_CONFIG };

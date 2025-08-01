import { useMemo } from "react";

import { useCountry } from "@country/hooks/useCountry";
import { CountryRepositoryFactory } from "@country/repositories/country-repository.factory";
import { useGoTo } from "@hooks/useGoTo";

const useCountryState = (id: string) => {
  const { goToCountries, goToCountry } = useGoTo();
  const repository = useMemo(() => new CountryRepositoryFactory(), []);

  const {
    data: country,
    isLoading: isLoading,
    error: isError,
  } = useCountry(repository, id);

  return { goToCountry, goToCountries, country, isError, isLoading };
};

export { useCountryState };

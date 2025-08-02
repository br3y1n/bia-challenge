import { useMemo } from "react";

import { useCountry } from "@country/hooks/useCountry";
import { CountryRepositoryFactory } from "@country/repositories/country-repository.factory";
import { useGoTo } from "@hooks/useGoTo";

const useCountryState = (id: string) => {
  const repository = useMemo(() => new CountryRepositoryFactory(), []);
  const { goToCountries, goToCountry } = useGoTo();
  const { data: country, isLoading, error } = useCountry(repository, id);

  return { goToCountry, goToCountries, country, isError: !!error, isLoading };
};

export { useCountryState };

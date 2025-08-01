import { useQuery } from "@tanstack/react-query";

import { CountryRepository } from "@country/repositories/country-repository.interface";
import { TCountryFilters } from "@country/types/country-filters.type";
import { API_KEYS } from "@infrastructure/api/constants/keys.const";
import { canRetry } from "@utils/can-retry";

const useCountries = (
  repository: CountryRepository,
  filters: TCountryFilters,
) =>
  useQuery({
    queryKey: API_KEYS.countries(filters),
    queryFn: () => repository.getCountries(filters),
    retry: canRetry,
    refetchOnWindowFocus: false,
  });

export { useCountries };

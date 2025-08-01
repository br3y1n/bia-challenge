import { useQuery } from "@tanstack/react-query";

import { CountryRepository } from "@country/repositories/country-repository.interface";
import { API_KEYS } from "@infrastructure/api/constants/keys.const";
import { canRetry } from "@utils/can-retry";

const useCountry = (repository: CountryRepository, id: string) =>
  useQuery({
    queryKey: API_KEYS.country(id),
    queryFn: () => repository.getCountry(id),
    retry: canRetry,
    refetchOnWindowFocus: false,
  });

export { useCountry };

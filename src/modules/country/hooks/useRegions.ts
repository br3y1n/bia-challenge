import { useQuery } from "@tanstack/react-query";

import { CountryRepository } from "@country/repositories/country-repository.interface";
import { API_KEYS } from "@infrastructure/api/constants/keys.const";
import { canRetry } from "@utils/can-retry";

const useRegions = (repository: CountryRepository) =>
  useQuery({
    queryKey: API_KEYS.regions(),
    queryFn: () => repository.getRegions(),
    retry: canRetry,
    refetchOnWindowFocus: false,
  });

export { useRegions };

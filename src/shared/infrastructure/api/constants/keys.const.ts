import { TCountryFilters } from "@country/types/country-filters.type";

const API_KEYS = {
  countries: (filters?: TCountryFilters) => ["countries", filters],
  country: (id: string) => ["country", id],
  regions: () => ["regions"],
};

export { API_KEYS };

import { TCountryFilters } from "@country/types/country-filters.type";
import { CountriesPreviewResponse } from "@country/types/country-preview.type";
import { Country } from "@country/types/country.type";

interface CountryRepository {
  getCountries: (
    filters?: TCountryFilters,
  ) => Promise<CountriesPreviewResponse>;
  getRegions: () => Promise<string[]>;
  getCountry: (id: string) => Promise<Country>;
}

export type { CountryRepository };

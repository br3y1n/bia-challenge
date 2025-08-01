import { TCountryFilters } from "@country/types/country-filters.type";
import { CountryPreview } from "@country/types/country-preview.type";
import { Country } from "@country/types/country.type";

interface CountryRepository {
  getCountries: (filters: TCountryFilters) => Promise<CountryPreview[]>;
  getCountry: (id: string) => Promise<Country>;
}

export type { CountryRepository };

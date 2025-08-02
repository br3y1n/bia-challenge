"use client";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import { useCountries } from "@country/hooks/useCountries";
import { useRegions } from "@country/hooks/useRegions";
import { CountryRepositoryFactory } from "@country/repositories/country-repository.factory";
import { useDebounce } from "@hooks/useDebounce";

const ITEM_PER_PAGE = 8;

const useCountriesState = () => {
  const countryRepository = useMemo(() => new CountryRepositoryFactory(), []);
  const form = useForm({ defaultValues: { search: "", region: "", page: 1 } });
  const { control, watch, setValue } = form;
  const { applyDebounce } = useDebounce();
  const watchedFields = watch();
  const [debouncedValues, setDebouncedValues] = useState(watchedFields);
  const [active, setActive] = useState(false);

  const filters = {
    name: debouncedValues.search,
    region: watchedFields.region,
    page: watchedFields.page,
    limit: ITEM_PER_PAGE,
  };

  const {
    data: countriesResponse,
    isLoading: isLoadingCountries,
    error: errorCountries,
  } = useCountries(countryRepository, filters);

  const { data: regions, isLoading: isLoadingRegions } =
    useRegions(countryRepository);

  const showShrink = watchedFields.search.length > 0 || active;
  const labelClassName = showShrink ? undefined : "withAdorment";

  const onFocusSearch = () => {
    setActive(true);
  };

  const onBlurSearch = () => {
    setActive(false);
  };

  useEffect(() => {
    applyDebounce(() => {
      setDebouncedValues(watchedFields);
      setValue("page", 1);
    });
  }, [watchedFields.search]);

  useEffect(() => {
    setValue("page", 1);
  }, [watchedFields.region]);

  return {
    isLoadingCountries,
    isErrorCountries: !!errorCountries,
    showShrink,
    labelClassName,
    onFocusSearch,
    onBlurSearch,
    countries: countriesResponse?.countries,
    regions,
    isLoadingRegions,
    control,
    pages: countriesResponse?.pages,
  };
};

export { useCountriesState };

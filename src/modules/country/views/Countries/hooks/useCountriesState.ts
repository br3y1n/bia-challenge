"use client";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import { useCountries } from "@country/hooks/useCountries";
import { CountryRepositoryFactory } from "@country/repositories/country-repository.factory";
import { useDebounce } from "@hooks/useDebounce";

const useCountriesState = () => {
  const repository = useMemo(() => new CountryRepositoryFactory(), []);
  const form = useForm({ defaultValues: { search: "", region: "" } });
  const { control, watch } = form;
  const { applyDebounce } = useDebounce();
  const watchedFields = watch();
  const [debouncedValues, setDebouncedValues] = useState(watchedFields);

  const {
    data: countries,
    isLoading: isLoading,
    error: isError,
  } = useCountries(repository, {
    name: debouncedValues.search,
    region: debouncedValues.region,
  });

  const [active, setActive] = useState(false);

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
    });
  }, [watchedFields.search]);

  return {
    isLoading,
    isError,
    showShrink,
    labelClassName,
    onFocusSearch,
    onBlurSearch,
    countries,
    regions: [],
    control,
  };
};

export { useCountriesState };

"use client";
import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { getCountriesByApi } from "@adapters/api/api";
import ICountryPreviewEntity from "@entities/countryPreview.entity";

const useCountriesState = () => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false);
  const [countries, setCountries] = useState<ICountryPreviewEntity[]>([]);
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(true);

  const regions = countries.reduce<string[]>((acc, { region }) => {
    if (!acc.includes(region)) acc.push(region);

    return acc;
  }, []);

  const shrink = search.length > 0 || active;
  const labelClassName = shrink ? undefined : "withAdorment";

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  const onFocusSearch = () => {
    setActive(true);
  };

  const onBlurSearch = () => {
    setActive(false);
  };

  const getCountries = async (name: string) => {
    setCountries(await getCountriesByApi(name));
    setLoading(false);
  };

  const onChangeRegion = (event: SelectChangeEvent<string>) => {
    setRegion(event.target.value);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getCountries(search);
    }, 500);

    setLoading(true);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  useEffect(() => {
    setRegion("");
  }, [countries]);

  search;
  const countriesFiltered =
    region === ""
      ? countries
      : countries.filter(
          ({ region: currentRegion }) => currentRegion === region,
        );

  return {
    shrink,
    labelClassName,
    onChangeSearch,
    search,
    onFocusSearch,
    onBlurSearch,
    countries: countriesFiltered,
    regions,
    region,
    onChangeRegion,
    loading,
  };
};

export default useCountriesState;

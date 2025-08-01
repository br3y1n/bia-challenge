"use client";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";

import { CountryCards } from "@country/components/CountryCards";

import { countriesStyles } from "./Countries.style";
import { useCountriesState } from "./hooks/useCountriesState";

const Countries = () => {
  const {
    showShrink,
    labelClassName,
    onFocusSearch,
    onBlurSearch,
    countries,
    regions,
    control,
  } = useCountriesState();

  return (
    <>
      <Box sx={countriesStyles.inputContainer}>
        <Controller
          control={control}
          name="search"
          render={({ field }) => (
            <TextField
              {...field}
              label="Search for a country..."
              slotProps={{
                inputLabel: {
                  shrink: showShrink,
                  className: labelClassName,
                  htmlFor: "search",
                },
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={countriesStyles.icon} />
                    </InputAdornment>
                  ),
                },
              }}
              id="search"
              sx={countriesStyles.search}
              onFocus={onFocusSearch}
              onBlur={onBlurSearch}
            />
          )}
        />

        <Controller
          control={control}
          name="region"
          render={({ field }) => (
            <FormControl sx={countriesStyles.select}>
              <InputLabel htmlFor="region">Filter by Region</InputLabel>

              <Select {...field} label="Filter by Region" id="region">
                <MenuItem value={""}>None</MenuItem>

                {regions.map((region, index) => (
                  <MenuItem value={region} key={index}>
                    {region}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
      </Box>

      <CountryCards cards={countries ?? []} />
    </>
  );
};

export { Countries };

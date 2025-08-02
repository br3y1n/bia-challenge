"use client";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";

import {
  CountryCards,
  CountryCardsSkeleton,
} from "@country/components/CountryCards";
import { renderByStatus } from "@wrappers/render-by-status.wrapper";

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
    isLoadingCountries,
    isErrorCountries,
    isLoadingRegions,
    pages,
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
                <MenuItem value={""}>
                  {isLoadingRegions ? "Loading..." : "None"}
                </MenuItem>

                {regions?.map((region, index) => (
                  <MenuItem value={region} key={index}>
                    {region}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
      </Box>

      {renderByStatus(
        () => (
          <>
            <CountryCards cards={countries ?? []} />

            {pages! > 0 && (
              <Controller
                control={control}
                name="page"
                render={({ field: { value, onChange } }) => (
                  <Pagination
                    count={pages}
                    page={value}
                    onChange={(_, page) => {
                      onChange(page);
                    }}
                    siblingCount={0}
                  />
                )}
              />
            )}
          </>
        ),
        {
          loader: {
            is: isLoadingCountries,
            render: () => <CountryCardsSkeleton />,
          },
          error: { is: isErrorCountries },
        },
      )}
    </>
  );
};

export { Countries };

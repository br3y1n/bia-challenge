"use client";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  TextField,
} from "@mui/material";
import useCountriesState from "./hooks/useCountriesState";
import countriesPageStyles from "./page.styles";
import CountryCards from "./components/CountryCards/CountryCards";
import CountryCardsSkeleton from "./components/CountryCards/CountryCards.skeleton";

const CountriesPage = () => {
  const {
    shrink,
    labelClassName,
    onChangeSearch,
    search,
    onFocusSearch,
    onBlurSearch,
    countries,
    regions,
    onChangeRegion,
    region,
    loading,
  } = useCountriesState();

  return (
    <>
      <Box sx={countriesPageStyles.inputContainer}>
        <TextField
          label="Search for a country..."
          InputLabelProps={{
            shrink,
            className: labelClassName,
            htmlFor: "search",
          }}
          id="search"
          sx={countriesPageStyles.search}
          value={search}
          onChange={onChangeSearch}
          onFocus={onFocusSearch}
          onBlur={onBlurSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={countriesPageStyles.icon} />
              </InputAdornment>
            ),
          }}
        />

        <FormControl sx={countriesPageStyles.select}>
          <InputLabel htmlFor="region">Filter by Region</InputLabel>

          <Select
            label="Filter by Region"
            id="region"
            onChange={onChangeRegion}
            value={region}
          >
            <MenuItem value={""}>None</MenuItem>

            {regions.map((region, index) => (
              <MenuItem value={region} key={index}>
                {region}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {loading ? <CountryCardsSkeleton /> : <CountryCards cards={countries} />}
    </>
  );
};

export default CountriesPage;

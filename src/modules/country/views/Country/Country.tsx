"use client";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box, Button, Typography } from "@mui/material";
import { useParams } from "next/navigation";

import { SafeImage } from "@components/SafeImage";

import { countryStyles } from "./Country.style";
import { useCountryState } from "./hooks/useCountryState";

const Country = () => {
  const { id } = useParams<{ id: string }>();
  const { goToCountries, goToCountry, country, isLoading, isError } =
    useCountryState(id);

  if (isLoading || isError) return <>load...</>;

  return (
    <>
      <Button
        startIcon={<KeyboardBackspaceIcon />}
        sx={countryStyles.back}
        onClick={goToCountries}
      >
        Back
      </Button>

      <Box sx={countryStyles.container}>
        <Box sx={countryStyles.imgContainer}>
          <Box sx={countryStyles.imgRelation}>
            <SafeImage
              src={country!.flag.src}
              alt={country!.flag.alt}
              sx={countryStyles.img}
            />
          </Box>
        </Box>

        <Box sx={countryStyles.rightContainer}>
          <Typography variant="h2" sx={countryStyles.name}>
            {country!.name.common}
          </Typography>

          <Box sx={countryStyles.descriptionContainer}>
            <Box>
              <Typography variant="body1" sx={countryStyles.description}>
                <b>Native Name:</b> {Object.values(country!.name.native)}
              </Typography>

              <Typography variant="body1" sx={countryStyles.description}>
                <b>Population:</b> {country!.population}
              </Typography>

              <Typography variant="body1" sx={countryStyles.description}>
                <b>Region:</b> {country!.region}
              </Typography>

              <Typography variant="body1" sx={countryStyles.description}>
                <b>Sub Region:</b> {country!.subregion}
              </Typography>

              <Typography variant="body1" sx={countryStyles.description}>
                <b>Capital:</b> {country!.capital}
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" sx={countryStyles.description}>
                <b>Top Level Domain:</b> {country!.tld}
              </Typography>

              <Typography variant="body1" sx={countryStyles.description}>
                <b>Currencies:</b> {country!.currencies.join(", ")}
              </Typography>

              <Typography variant="body1" sx={countryStyles.description}>
                <b>Languages:</b> {Object.values(country!.languages).join(", ")}
              </Typography>
            </Box>
          </Box>

          <Box sx={countryStyles.countriesContainer}>
            <Typography sx={countryStyles.countriesTitle}>
              Border Countries:
            </Typography>

            <Box>
              {country!.borders.length > 0 ? (
                country!.borders.map(({ name, id }, index: number) => (
                  <Button
                    key={index}
                    onClick={() => goToCountry(id)}
                    sx={countryStyles.countryButton}
                  >
                    {name}
                  </Button>
                ))
              ) : (
                <Typography variant="body1">No borders...</Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export { Country };

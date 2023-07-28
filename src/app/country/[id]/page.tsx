"use client";
import { getCountryByIdApi } from "@adapters/api/api";
import ICountryFullEntity from "@entities/countryFull.entity";
import { RouteEnum } from "@enums";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box, Button, Typography, styled } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import CountryPageSkeleton from "./page.skeleton";
import countryPageStyles from "./page.styles";

const ImgStyled = styled("img")({});

const CountryPage = ({ params: { id } }: { params: { id: string } }) => {
  const [country, setCountry] = useState<ICountryFullEntity | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState(true);

  const getCountry = async (id: string) => {
    setCountry(await getCountryByIdApi(id));
    setLoading(false);
  };

  useEffect(() => {
    getCountry(id);
  }, [id]);

  if (loading) return <CountryPageSkeleton />;

  return (
    <>
      <Link href={RouteEnum.COUNTRIES} legacyBehavior>
        <Button
          startIcon={<KeyboardBackspaceIcon />}
          sx={countryPageStyles.back}
        >
          Back
        </Button>
      </Link>

      {country === undefined ? (
        <Typography variant="body1">Country no found...</Typography>
      ) : (
        <Box sx={countryPageStyles.container}>
          <Box sx={countryPageStyles.imgContainer}>
            <Box sx={countryPageStyles.imgRelation}>
              <ImgStyled
                src={country.flag.src}
                alt={country.flag.alt}
                sx={countryPageStyles.img}
              />
            </Box>
          </Box>

          <Box sx={countryPageStyles.rightContainer}>
            <Typography variant="h2" sx={countryPageStyles.name}>
              {country.name.common}
            </Typography>

            <Box sx={countryPageStyles.descriptionContainer}>
              <Box>
                <Typography variant="body1" sx={countryPageStyles.description}>
                  <b>Native Name:</b> {country.name.native}
                </Typography>

                <Typography variant="body1" sx={countryPageStyles.description}>
                  <b>Population:</b> {country.population}
                </Typography>

                <Typography variant="body1" sx={countryPageStyles.description}>
                  <b>Region:</b> {country.region}
                </Typography>

                <Typography variant="body1" sx={countryPageStyles.description}>
                  <b>Sub Region:</b> {country.subregion}
                </Typography>

                <Typography variant="body1" sx={countryPageStyles.description}>
                  <b>Capital:</b> {country.capital}
                </Typography>
              </Box>

              <Box>
                <Typography variant="body1" sx={countryPageStyles.description}>
                  <b>Top Level Domain:</b> {country.tld}
                </Typography>

                <Typography variant="body1" sx={countryPageStyles.description}>
                  <b>Currencies:</b> {country.currencies.join(", ")}
                </Typography>

                <Typography variant="body1" sx={countryPageStyles.description}>
                  <b>Languages:</b> {country.languages.join(", ")}
                </Typography>
              </Box>
            </Box>

            <Box sx={countryPageStyles.countriesContainer}>
              <Typography sx={countryPageStyles.countriesTitle}>
                Border Countries:
              </Typography>

              <Box>
                {country.borders.length > 0 ? (
                  country.borders.map(({ name, id }, index: number) => (
                    <Link
                      href={`${RouteEnum.COUNTRY}/${id}`}
                      legacyBehavior
                      key={index}
                    >
                      <Button sx={countryPageStyles.countryButton}>
                        {name}
                      </Button>
                    </Link>
                  ))
                ) : (
                  <Typography variant="body1">No borders...</Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CountryPage;

"use client";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box, Button, Typography, styled } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCountry } from "../../../adapters/api/api";
import RouteEnum from "../../../enums/route.enum";
import countryPageStyles from "./page.styles";
import CountryPageSkeleton from "./page.skeleton";

const ImgStyled = styled("img")({});

const CountryPage = ({ params: { id } }: { params: { id: string } }) => {
  const [country, setCountry] = useState<any>(undefined);
  const [loading, setLoading] = useState(true);

  const getData = async (id: string) => {
    const data = await getCountry(id);
    setCountry(data);
    setLoading(false);
  };

  useEffect(() => {
    getData(id);
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
                src={country.flags.svg}
                alt={country.flags.alt}
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
                  <b>Native Name:</b>{" "}
                  {Object.values<any>(country.name.nativeName)[0].common}
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
                  <b>Currencies:</b>{" "}
                  {Object.values<any>(country.currencies)
                    .map(({ name }) => name)
                    .join(", ")}
                </Typography>

                <Typography variant="body1" sx={countryPageStyles.description}>
                  <b>Languages:</b>{" "}
                  {Object.values(country.languages).join(", ")}
                </Typography>
              </Box>
            </Box>

            <Box sx={countryPageStyles.countriesContainer}>
              <Typography sx={countryPageStyles.countriesTitle}>
                Border Countries:
              </Typography>

              <Box>
                {country.borders.length > 0 ? (
                  country.borders.map(({ name, id }: any, index: number) => (
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

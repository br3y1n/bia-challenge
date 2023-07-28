import { RouteEnum } from "@enums";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import countryCardStyles from "./CountryCard.styles";
import ICountryCardProps from "./CountryCard.interfaces";

const CountryCard: FC<ICountryCardProps> = ({
  image,
  name,
  id,
  alt,
  matchName,
  population,
  region,
  capital,
}) => (
  <Card sx={countryCardStyles.container}>
    <Box sx={countryCardStyles.imgRelation}>
      <Link href={`${RouteEnum.COUNTRY}/${id}`} legacyBehavior>
        <CardMedia
          component="img"
          image={image}
          alt={alt}
          sx={countryCardStyles.img}
        />
      </Link>
    </Box>

    <CardContent sx={countryCardStyles.description}>
      <Typography variant="body1" sx={countryCardStyles.title}>
        {name}
      </Typography>
      <Typography variant="body1" sx={countryCardStyles.subtitle}>
        ({matchName})
      </Typography>

      <Typography variant="body1" sx={countryCardStyles.text}>
        <b>Population:</b> {population}
      </Typography>

      <Typography variant="body1" sx={countryCardStyles.text}>
        <b>Region:</b> {region}
      </Typography>

      <Typography variant="body1" sx={countryCardStyles.text}>
        <b>Capital:</b> {capital}
      </Typography>
    </CardContent>
  </Card>
);

export default CountryCard;

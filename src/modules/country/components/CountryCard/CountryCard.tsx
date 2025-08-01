import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import { CountryPreview } from "@country/types/country-preview.type";
import { useGoTo } from "@hooks/useGoTo";

import { countryCardStyles } from "./CountryCard.style";

const CountryCard = ({
  name,
  id,
  population,
  region,
  capital,
  flag: { alt, src },
}: CountryPreview) => {
  const { goToCountry } = useGoTo();

  return (
    <Card sx={countryCardStyles.container}>
      <Box sx={countryCardStyles.imgRelation}>
        <CardMedia
          component="img"
          image={src}
          alt={alt}
          onClick={() => goToCountry(id)}
          sx={countryCardStyles.img}
        />
      </Box>

      <CardContent sx={countryCardStyles.description}>
        <Typography variant="body1" sx={countryCardStyles.title}>
          {name.common}
        </Typography>

        <Typography variant="body1" sx={countryCardStyles.subtitle}>
          ({name.match})
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
};

export { CountryCard };

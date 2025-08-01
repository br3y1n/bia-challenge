import { Box, Typography } from "@mui/material";

import { CountryCard } from "../CountryCard/CountryCard";

import { countryCardsStyles } from "./CountryCards.style";
import { ICountryCardsProps } from "./CountryCards.type";

const CountryCards = ({ cards }: ICountryCardsProps) => {
  const hasCards = cards.length > 0;

  return hasCards ? (
    <Box sx={countryCardsStyles.container}>
      {cards.map((props, index) => (
        <CountryCard key={index} {...props} />
      ))}
    </Box>
  ) : (
    <Typography variant={"body1"} sx={countryCardsStyles.notFound}>
      No matches found...
    </Typography>
  );
};

export { CountryCards };

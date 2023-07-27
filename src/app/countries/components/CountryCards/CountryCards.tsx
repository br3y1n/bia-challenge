import { Box, Typography } from "@mui/material";
import { FC } from "react";
import CountryCard from "../CountryCard/CountryCard";
import mediaCardsStyles from "./CountryCards.styles";

const CountryCards: FC<{ cards: any[] }> = ({ cards }) => {
  const hasCards = cards.length > 0;

  return hasCards ? (
    <Box sx={mediaCardsStyles.container}>
      {cards.map((props: any, index) => (
        <CountryCard
          key={index}
          image={props.flags.svg}
          alt={props.flags.alt}
          name={props.name.common}
          officialName={props.name.official}
          id={props.cca3}
          population={props.population}
          region={props.region}
          capital={props.capital}
        />
      ))}
    </Box>
  ) : (
    <Typography variant={"body1"} sx={mediaCardsStyles.notFound}>
      No matches found...
    </Typography>
  );
};

export default CountryCards;

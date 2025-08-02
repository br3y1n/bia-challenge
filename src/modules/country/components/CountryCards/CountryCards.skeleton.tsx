import { Box, Skeleton } from "@mui/material";

import { countryCardsStyles } from "./CountryCards.style";

const CountryCardsSkeleton = () => (
  <Box sx={countryCardsStyles.container}>
    {Array(8)
      .fill("")
      .map((_, index) => (
        <Skeleton
          variant="rectangular"
          sx={countryCardsStyles.skeletons}
          key={index}
        />
      ))}
  </Box>
);

export { CountryCardsSkeleton };

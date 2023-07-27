import { Box, Skeleton } from "@mui/material";
import { FC } from "react";
import mediaCardsStyles from "./CountryCards.styles";

const CountryCardsSkeleton: FC = () => (
  <Box sx={mediaCardsStyles.container}>
    {Array(8)
      .fill("")
      .map((_, index) => (
        <Skeleton
          variant="rectangular"
          sx={mediaCardsStyles.skeletons}
          key={index}
        />
      ))}
  </Box>
);

export default CountryCardsSkeleton;

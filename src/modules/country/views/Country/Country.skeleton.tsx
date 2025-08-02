"use client";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box, Button, Skeleton, SxProps } from "@mui/material";

import { useGoTo } from "@hooks/useGoTo";

import { countryStyles } from "./Country.style";

const createSkeletons = (length: number, styles?: SxProps) =>
  Array(length)
    .fill("")
    .map((_, idx) => (
      <Skeleton
        key={idx}
        variant="rectangular"
        sx={styles ?? countryStyles.descriptionSkeleton}
      />
    ));

const CountrySkeleton = () => {
  const { goToCountries } = useGoTo();

  return (
    <>
      <Button
        startIcon={<KeyboardBackspaceIcon />}
        onClick={goToCountries}
        sx={countryStyles.back}
      >
        Back
      </Button>

      <Box sx={countryStyles.container}>
        <Box sx={countryStyles.imgContainer}>
          <Box sx={countryStyles.imgRelation}>
            <Skeleton variant="rectangular" sx={countryStyles.imgSkeleton} />
          </Box>
        </Box>

        <Box sx={countryStyles.rightContainer}>
          <Skeleton variant="rectangular" sx={countryStyles.nameSkeleton} />

          <Box sx={countryStyles.descriptionContainer}>
            <Box>{createSkeletons(5)}</Box>

            <Box>{createSkeletons(3)}</Box>
          </Box>

          <Box sx={countryStyles.countriesContainer}>
            <Skeleton
              variant="rectangular"
              sx={countryStyles.countriesTitleSkeleton}
            />

            <Box>{createSkeletons(3, countryStyles.countryButtonSkeleton)}</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export { CountrySkeleton };

"use client";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box, Button, Skeleton } from "@mui/material";
import Link from "next/link";
import RouteEnum from "../../../enums/route.enum";
import countryPageStyles from "./page.styles";

const CountryPageSkeleton = () => (
  <>
    <Link href={RouteEnum.COUNTRIES} legacyBehavior>
      <Button startIcon={<KeyboardBackspaceIcon />} sx={countryPageStyles.back}>
        Back
      </Button>
    </Link>
    <Box sx={countryPageStyles.container}>
      <Box sx={countryPageStyles.imgContainer}>
        <Box sx={countryPageStyles.imgRelation}>
          <Skeleton variant="rectangular" sx={countryPageStyles.imgSkeleton} />
        </Box>
      </Box>

      <Box sx={countryPageStyles.rightContainer}>
        <Skeleton variant="rectangular" sx={countryPageStyles.nameSkeleton} />

        <Box sx={countryPageStyles.descriptionContainer}>
          <Box>
            <Skeleton
              variant="rectangular"
              sx={countryPageStyles.descriptionSkeleton}
            />

            <Skeleton
              variant="rectangular"
              sx={countryPageStyles.descriptionSkeleton}
            />

            <Skeleton
              variant="rectangular"
              sx={countryPageStyles.descriptionSkeleton}
            />

            <Skeleton
              variant="rectangular"
              sx={countryPageStyles.descriptionSkeleton}
            />

            <Skeleton
              variant="rectangular"
              sx={countryPageStyles.descriptionSkeleton}
            />
          </Box>

          <Box>
            <Skeleton
              variant="rectangular"
              sx={countryPageStyles.descriptionSkeleton}
            />

            <Skeleton
              variant="rectangular"
              sx={countryPageStyles.descriptionSkeleton}
            />

            <Skeleton
              variant="rectangular"
              sx={countryPageStyles.descriptionSkeleton}
            />
          </Box>
        </Box>

        <Box sx={countryPageStyles.countriesContainer}>
          <Skeleton
            variant="rectangular"
            sx={countryPageStyles.countriesTitleSkeleton}
          />

          <Box>
            <Skeleton
              variant="rectangular"
              sx={countryPageStyles.countryButtonSkeleton}
            />
            <Skeleton
              variant="rectangular"
              sx={countryPageStyles.countryButtonSkeleton}
            />
            <Skeleton
              variant="rectangular"
              sx={countryPageStyles.countryButtonSkeleton}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  </>
);

export default CountryPageSkeleton;

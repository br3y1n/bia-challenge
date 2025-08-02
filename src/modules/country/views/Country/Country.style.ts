import { createStyles } from "@utils/create-styles";

const countryStyles = createStyles({
  back: {
    px: { xs: "25px", md: "40px" },
    mb: { xs: "60px", md: "80px" },
  },
  container: {
    display: { xs: "block", md: "grid" },
    gridTemplateColumns: "1fr 1fr",
    gap: { xs: "8%", lg: "12%" },
  },
  imgContainer: {
    width: "100%",
    maxWidth: { xs: "400px", md: "none" },
    mx: "auto",
    mb: { xs: "40px", md: "0" },
  },
  imgRelation: {
    width: "100%",
    height: 0,
    pt: "70%",
    position: "relative",
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    boxShadow: "0px 0px 6px 2px #00000047",
    objectFit: "cover",
  },
  imgSkeleton: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  descriptionContainer: {
    display: { xs: "block", md: "grid" },
    gridTemplateColumns: "1fr 1fr",
    mb: { xs: "40px", md: "70px" },
    gap: "20px",

    "&>div": {
      mb: { xs: "40px", md: "none" },
    },
  },
  name: {
    mb: { xs: "20px", md: "28px" },
  },
  nameSkeleton: {
    mb: { xs: "20px", md: "28px" },
    width: "150px",
    height: "30px",
  },
  description: {
    mb: "8px",
  },
  descriptionSkeleton: {
    mb: "8px",
  },
  countriesContainer: {
    display: { xs: "block", md: "flex" },
    gap: "20px",
  },
  countriesTitle: {
    fontSize: { xs: "16px" },
    whiteSpace: "nowrap",
    fontWeight: "800",
    mb: { xs: "15px", md: "0" },
  },
  countriesTitleSkeleton: {
    mt: "3px",
    mb: { xs: "15px", md: "0" },
    width: "150px",
    height: "25px",
  },
  countryButton: {
    fontSize: "14px",
    py: "2px",
    m: "3px",
  },
  countryButtonSkeleton: {
    py: "2px",
    m: "3px",
    width: "70px",
    display: "inline-block",
    height: "30px",
  },
  rightContainer: {
    alignSelf: "center",
  },
});

export { countryStyles };

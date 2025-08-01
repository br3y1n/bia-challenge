import { createStyles } from "@utils/create-styles";

const countryCardStyles = createStyles({
  title: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontWeight: "800",
  },
  subtitle: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontWeight: "800",
    fontSize: "12px",
    mb: "20px",
  },
  text: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontSize: "12px",
  },
  container: {
    width: "100%",
    maxWidth: { xs: "320px", sm: "250px" },
    mx: "auto",
    bgcolor: "background.default",
    boxShadow: "0px 0px 6px 2px #00000047",
  },
  img: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    objectFit: "cover",
    cursor: "pointer",
  },
  description: {
    overflow: "hidden",
    p: "20px 20px",
  },
  imgRelation: {
    width: "100%",
    pt: "70%",
    position: "relative",
    boxShadow: "0px 0px 6px 1px #00000047",
  },
});

export { countryCardStyles };

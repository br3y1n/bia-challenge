import { createStyles } from "@utils";

const countriesPageStyles = createStyles({
  inputContainer: {
    display: { xs: "block", md: "flex" },
    justifyContent: "space-between",
    alignItems: "center",
  },
  search: {
    width: "100%",
    maxWidth: { xs: "none", md: "475px" },
    mb: { xs: "40px", md: "0" },
  },
  select: {
    minWidth: { xs: "240px", md: "200px" },
  },
  icon: {
    color: "primary.main",
  },
});

export default countriesPageStyles;

import { createStyles } from "@utils/create-styles";

const countryCardsStyles = createStyles({
  container: {
    my: "45px",
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "1fr 1fr 1fr",
      lg: "1fr 1fr 1fr 1fr",
    },
    gap: { xs: "40px", sm: "0px", md: "80px" },
  },
  notFound: {
    my: "45px",
    textAlign: "center",
  },
});

export { countryCardsStyles };

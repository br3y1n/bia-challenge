import { createStyles } from "@utils/create-styles";

const errorPageStyles = createStyles({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "8px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "24px",
  },
});

export { errorPageStyles };

import { createStyles } from "@utils/create-styles";

const loaderStyles = createStyles({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  spinner: {
    width: 64,
    height: 64,
    display: "block",
    border: "6px solid",
    borderColor: "grey.300",
    borderTopColor: "success.main",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    "@keyframes spin": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
  },
  text: {
    maxWidth: 448,
    textAlign: "center",
    px: 4,
    fontSize: "1.125rem",
    mt: 2,
  },
});

export { loaderStyles };

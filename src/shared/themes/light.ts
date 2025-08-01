import { createTheme } from "@mui/material";

import { nunitoSans } from "@fonts/nunito-sans.font";

const themeLight = createTheme({
  typography: {
    fontFamily: nunitoSans.style.fontFamily,
    h1: {
      margin: 0,
      fontSize: "24px",
      fontWeight: "800",
      color: "#111517",

      "@media (max-width: 900px)": {
        fontSize: "14px",
      },
    },
    h2: {
      margin: 0,
      fontSize: "30px",
      fontWeight: "800",
      color: "#111517",

      "@media (max-width: 900px)": {
        fontSize: "20px",
      },
    },
    body1: {
      margin: 0,
      fontSize: "16px",
      color: "#111517",

      "@media (max-width: 900px)": {
        fontSize: "14px",
      },
    },
  },
  palette: {
    primary: {
      main: "#111517",
    },
    background: {
      paper: "#fafafa",
      default: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "600",
          fontSize: "16px",
          backgroundColor: "#ffffff",

          "@media (max-width: 900px)": {
            fontSize: "12px",
          },
        },
        text: {
          boxShadow: "0px 0px 6px 2px #00000033",
        },
      },
    },
  },
});

export { themeLight };

import { createTheme } from "@mui/material";

import { nunitoSans } from "@fonts/nunito-sans.font";

const themeLight = createTheme({
  typography: {
    fontFamily: nunitoSans.style.fontFamily,
    h1: {
      m: 0,
      fontSize: "24px",
      fontWeight: "800",
      color: "#111517",
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
        },
      },
    },
  },
});

export { themeLight };

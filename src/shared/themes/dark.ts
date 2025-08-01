import { createTheme } from "@mui/material";

import { themeLight } from "./light";

const themeDark = createTheme(themeLight, {
  typography: {
    h1: {
      color: "#ffffff",
    },
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
    background: {
      paper: "#202c37",
      default: "#2b3945",
    },
  },
});

export { themeDark };

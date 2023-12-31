import { createTheme } from "@mui/material";
import themeLight from "./light";

const themeDark = createTheme(themeLight, {
  typography: {
    h1: {
      color: "#ffffff",
    },
    h2: {
      color: "#ffffff",
    },
    body1: {
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#2b3945",
        },
        text: {
          boxShadow: "0px 0px 6px 2px #00000063",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: "#2b3945",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        shrink: {
          color: "#ffffff",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#2b3945",
          color: "#ffffff",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#2b3945",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        text: {
          color: "#ffffff",

          "&.Mui-selected": {
            backgroundColor: "#2b3945",
            border: "1px solid #ffffff",
            color: "#ffffff",
          },

          "&:hover": {
            backgroundColor: "#2b3945",
          },
        },
      },
    },
  },
});

export default themeDark;

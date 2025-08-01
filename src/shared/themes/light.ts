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
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: "#ffffff",
          boxShadow: "0px 0px 6px 0px #00000033",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          boxShadow: "0px 0px 6px 0px #00000033",
          borderColor: "transparent",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          transform: "translate(14px, 18px) scale(1)",
          fontSize: "14px",

          "&.withAdorment": {
            transform: "translate(70px, 18px) scale(1)",
          },
        },
        shrink: {
          transform: "translate(10px, -9px) scale(0.8)",
          color: "#111517",
          fontWeight: "600",
          paddingLeft: "5px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#111517",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          marginTop: "5px",
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          margin: "0px 12px",
          pointerEvents: "none",
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        text: {
          color: "#111517",

          "&.Mui-selected": {
            backgroundColor: "#ffffff",
            border: "1px solid #111517",
            color: "#111517",
            fontWeight: "600",
          },
        },
      },
    },
  },
});

export { themeLight };

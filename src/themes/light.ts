import { createTheme } from "@mui/material";
import { nunitoSans } from "../assets/fonts";

const themeLight = createTheme({
  typography: {
    fontFamily: nunitoSans.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

export default themeLight;

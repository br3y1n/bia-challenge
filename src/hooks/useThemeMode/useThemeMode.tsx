import Brightness4RoundedIcon from "@mui/icons-material/Brightness4Rounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import themeDark from "@themes/dark";
import themeLight from "@themes/light";
import { useState } from "react";
import IUseThemeMode from "./useThemeMode.interfaces";

const useThemeMode = (): IUseThemeMode => {
  const [isDark, setIsDark] = useState(false);

  const onToggleMode = () => {
    setIsDark((prevVal) => !prevVal);
  };

  const icon = isDark ? <Brightness4RoundedIcon /> : <DarkModeOutlinedIcon />;
  const text = isDark ? "Light Mode" : "Dark Mode";
  const theme = isDark ? themeDark : themeLight;

  return { icon, text, onToggleMode, theme };
};

export default useThemeMode;

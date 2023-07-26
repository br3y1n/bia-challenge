import { Theme } from "@mui/material";
import { ReactNode } from "react";

interface IUseThemeMode {
  icon: ReactNode;
  text: string;
  onToggleMode: () => void;
  theme: Theme;
}

export default IUseThemeMode;

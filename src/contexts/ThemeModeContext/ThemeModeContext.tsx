import useThemeMode from "@hooks/useThemeMode/useThemeMode";
import IUseThemeMode from "@hooks/useThemeMode/useThemeMode.interfaces";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useContext } from "react";
import IThemeModeProviderProps from "./ThemeModeContext.interfaces";

const ThemeModeContext = createContext<IUseThemeMode>(undefined!);

const ThemeModeProvider = ({ children }: IThemeModeProviderProps) => {
  const mode = useThemeMode();

  return (
    <ThemeModeContext.Provider value={mode}>
      <ThemeProvider theme={mode.theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

const useThemeModeContext = () => useContext(ThemeModeContext);

export { ThemeModeProvider as default, useThemeModeContext };

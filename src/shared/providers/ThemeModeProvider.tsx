"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";

import { useThemeMode } from "@hooks/useThemeMode";

const ThemeModeProvider = ({ children }: PropsWithChildren) => {
  const { theme } = useThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export { ThemeModeProvider };

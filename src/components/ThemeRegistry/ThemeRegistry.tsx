"use client";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import themeLight from "@themes/light";
import IThemeRegistryProps from "./ThemeRegistry.interfaces";
import useThemeRegistryState from "./hooks/useThemeRegistryState";

const ThemeRegistry = (props: IThemeRegistryProps) => {
  const { children, cache } = useThemeRegistryState(props);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={themeLight}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default ThemeRegistry;

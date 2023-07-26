"use client";
import ThemeModeProvider from "@contexts/ThemeModeContext/ThemeModeContext";
import { CacheProvider } from "@emotion/react";
import IThemeRegistryProps from "./ThemeRegistry.interfaces";
import useThemeRegistryState from "./hooks/useThemeRegistryState";

const ThemeRegistry = (props: IThemeRegistryProps) => {
  const { children, cache } = useThemeRegistryState(props);

  return (
    <CacheProvider value={cache}>
      <ThemeModeProvider>{children}</ThemeModeProvider>
    </CacheProvider>
  );
};

export default ThemeRegistry;

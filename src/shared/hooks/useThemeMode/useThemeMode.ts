import { create } from "zustand";

import { themeDark } from "@themes/dark";
import { themeLight } from "@themes/light";

import { IThemeMode } from "./useThemeMode.type";

const useThemeMode = create<IThemeMode>((set) => ({
  isDark: false,
  theme: themeLight,
  toggleTheme: () =>
    set((state) => {
      const isDark = !state.isDark;

      return {
        isDark,
        theme: isDark ? themeDark : themeLight,
      };
    }),
}));

export { useThemeMode };

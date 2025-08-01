import { themeDark } from "@themes/dark";
import { themeLight } from "@themes/light";

interface IThemeMode {
  isDark: boolean;
  theme: typeof themeLight | typeof themeDark;
  toggleTheme: () => void;
}

export type { IThemeMode };

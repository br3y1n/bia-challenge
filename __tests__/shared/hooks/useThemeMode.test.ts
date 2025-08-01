import { act, renderHook } from "@testing-library/react";

import { IThemeMode, useThemeMode } from "@hooks/useThemeMode";
import { themeDark } from "@themes/dark";
import { themeLight } from "@themes/light";

describe("useThemeMode tests:", () => {
  let result: { current: IThemeMode };

  beforeEach(() => {
    const { result: newResult } = renderHook(() => useThemeMode());

    result = newResult;
  });

  it("When it is called, then it return a initialState with light theme", () => {
    expect(result.current).toEqual({
      toggleTheme: expect.anything(),
      theme: themeLight,
      isDark: false,
    });
  });

  it("When toggleTheme is called, then theme changes to dark", () => {
    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toEqual(themeDark);
    expect(result.current.isDark).toEqual(true);
  });
});

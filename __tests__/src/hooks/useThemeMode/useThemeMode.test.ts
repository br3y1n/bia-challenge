import useThemeMode from "@hooks/useThemeMode/useThemeMode";
import IUseThemeMode from "@hooks/useThemeMode/useThemeMode.interfaces";
import { act, renderHook } from "@test-utils";
import themeDark from "@themes/dark";
import themeLight from "@themes/light";

describe("useThemeMode tests:", () => {
  let result: { current: IUseThemeMode };

  beforeEach(() => {
    const { result: newResult } = renderHook(() => useThemeMode());

    result = newResult;
  });

  it("When it is called, then it return a initialState with light theme", () => {
    expect(result.current).toEqual({
      icon: expect.anything(),
      text: "Dark Mode",
      onToggleMode: expect.anything(),
      theme: themeLight,
    });
  });

  it("When onToggleMode is called, then theme changes to dark and text to light", () => {
    act(() => {
      result.current.onToggleMode();
    });

    expect(result.current.text).toEqual("Light Mode");
    expect(result.current.theme).toEqual(themeDark);
  });
});

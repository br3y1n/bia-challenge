import ThemeModeProvider, {
  useThemeModeContext,
} from "@contexts/ThemeModeContext/ThemeModeContext";
import IUseThemeMode from "@hooks/useThemeMode/useThemeMode.interfaces";
import { act, renderHook } from "@test-utils";
import themeDark from "@themes/dark";
import themeLight from "@themes/light";

describe("ThemeModeContext tests:", () => {
  let result: { current: IUseThemeMode };

  beforeEach(() => {
    const { result: newResult } = renderHook(() => useThemeModeContext(), {
      wrapper: ThemeModeProvider,
    });

    result = newResult;
  });

  it("When the context is called under a provider context, then it return a context state", () => {
    expect(result.current).toEqual({
      icon: expect.anything(),
      text: "Dark Mode",
      onToggleMode: expect.anything(),
      theme: themeLight,
    });
  });

  it("When onToggleMode is called from context, then theme changes to dark and text to light", () => {
    act(() => {
      result.current.onToggleMode();
    });

    expect(result.current.text).toEqual("Light Mode");
    expect(result.current.theme).toEqual(themeDark);
  });
});

import ThemeModeProvider from "@contexts/ThemeModeContext/ThemeModeContext";
import { RenderOptions, render as rtlRender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactElement, ReactNode } from "react";

const render = (ui: ReactElement, renderOptions?: RenderOptions) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <ThemeModeProvider>{children}</ThemeModeProvider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { render, userEvent };

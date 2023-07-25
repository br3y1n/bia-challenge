import { ThemeProvider } from "@mui/material/styles";
import { RenderOptions, render as rtlRender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import themeLight from "@themes/light";
import { ReactElement, ReactNode } from "react";

const render = (ui: ReactElement, renderOptions?: RenderOptions) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <ThemeProvider theme={themeLight}>{children}</ThemeProvider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { render, userEvent };

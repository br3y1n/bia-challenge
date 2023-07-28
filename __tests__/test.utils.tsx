import { IApiCountry } from "@adapters/api/api.interfaces";
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

const getCountryResponse = () => ({
  borders: ["COL"],
  capital: ["Bogota"],
  cca3: "COL",
  currencies: { cop: { name: "pesos col" } },
  flags: {
    svg: "url",
    alt: "image",
  },
  languages: { spa: "spanish" },
  name: {
    common: "colombia",
    official: "colombia",
    nativeName: { spa: { common: "colombia", offcial: "colombia" } },
  },
  population: 123456,
  region: "america",
  subregion: "norte",
  tld: [".bt"],
});

export * from "@testing-library/react";
export { render, userEvent, getCountryResponse };

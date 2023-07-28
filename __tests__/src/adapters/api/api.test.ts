import { getCountriesByApi, getCountryByIdApi } from "@adapters/api/api";
import { IApiCountry } from "@adapters/api/api.interfaces";
import { ApiRouteEnum } from "@enums";
import { getCountryResponse } from "@test-utils";

describe("api tests:", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(getCountryResponse()),
      }),
    ) as jest.Mock;
  });

  it("When getCountriesByApi is called with empty name, then fetch is called with all endpoint", async () => {
    await getCountriesByApi("");

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringMatching(ApiRouteEnum.ALL),
    );
  });

  it("When getCountriesByApi is called with name, then fetch is called with name endpoint", async () => {
    await getCountriesByApi("test");

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringMatching(ApiRouteEnum.NAME),
    );
  });

  it("When getCountriesByApi fail, then it return a empty array", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      }),
    ) as jest.Mock;

    const countries = await getCountriesByApi("");

    expect(countries).toEqual([]);
  });

  it("When getCountryByIdApi  fail, then it return a undefined", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      }),
    ) as jest.Mock;

    const countries = await getCountryByIdApi("123");

    expect(countries).toEqual(undefined);
  });

  it("When getCountryByIdApi  is called, then it return a full country data", async () => {
    const countries = await getCountryByIdApi("123");

    expect(countries).toEqual({
      borders: [{ id: "COL", name: "colombia" }],
      capital: "Bogota",
      currencies: ["pesos col"],
      flag: { alt: "image", src: "url" },
      id: "COL",
      languages: ["spanish"],
      name: { common: "colombia", native: "colombia", official: "colombia" },
      population: "123.456",
      region: "america",
      subregion: "norte",
      tld: ".bt",
    });
  });
});

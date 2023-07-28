import { IApiCountry } from "@adapters/api/api.interfaces";
import {
  mapBorders,
  mapCountryFull,
  mapCountryPreview,
} from "@adapters/api/mappers";
import { getCountryResponse } from "@test-utils";

describe("api mappers tests:", () => {
  let apiCountryTest: IApiCountry;

  beforeEach(() => {
    apiCountryTest = getCountryResponse();

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(apiCountryTest),
      }),
    ) as jest.Mock;
  });

  it("When mapCountryPreview is called, then return a map data to preview", () => {
    const previewData = mapCountryPreview(apiCountryTest, "");

    expect(previewData).toEqual({
      name: {
        common: "colombia",
        match: "colombia",
      },
      id: "COL",
      capital: "Bogota",
      flag: {
        alt: "image",
        src: "url",
      },
      population: "123.456",
      region: "america",
    });
  });

  it("When mapBorders is called, then return a map data to border from endpoint", async () => {
    const previewData = await mapBorders(["COL"]);

    expect(previewData).toEqual([{ name: "colombia", id: "COL" }]);
  });

  it("When mapCountryFull is called, then return a full map data", async () => {
    const fullData = await mapCountryFull(apiCountryTest);

    expect(fullData).toEqual({
      borders: [
        {
          id: "COL",
          name: "colombia",
        },
      ],
      capital: "Bogota",
      currencies: ["pesos col"],
      flag: {
        alt: "image",
        src: "url",
      },
      id: "COL",
      languages: ["spanish"],
      name: {
        common: "colombia",
        native: "colombia",
        official: "colombia",
      },
      population: "123.456",
      region: "america",
      subregion: "norte",
      tld: ".bt",
    });
  });

  it("When nativeName hasn`t common name, then return a empty value", async () => {
    delete apiCountryTest.name.nativeName.spa;

    const fullData = await mapCountryFull(apiCountryTest);

    expect(fullData.name.native).toEqual("");
  });
});

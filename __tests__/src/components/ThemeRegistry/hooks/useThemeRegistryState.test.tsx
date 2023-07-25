import useThemeRegistryState from "@components/ThemeRegistry/hooks/useThemeRegistryState";
import { renderHook } from "@test-utils";
import React from "react";

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useServerInsertedHTML: jest.fn((fn) => fn()),
}));

jest.mock("@emotion/cache", () =>
  jest.fn(() => ({
    key: "mui",
    insert: jest.fn(),
    inserted: {},
    registered: {},
  })),
);

describe("useThemeRegistryState tests:", () => {
  const key = "mui";
  const childrenRef = <div />;
  const expected = {
    children: childrenRef,
    cache: {
      compat: true,
      key,
      inserted: {},
      registered: {},
      insert: expect.anything(),
    },
  };

  const customHook = () =>
    useThemeRegistryState({
      options: { key },
      children: childrenRef,
    });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("when  it hasn't differences, then a initialState with children and cache", () => {
    const { result } = renderHook(customHook);

    expect(result.current).toEqual(expected);
  });

  it("when it has differences, then return a initialState with children and cache", () => {
    jest.spyOn(React, "useState").mockImplementation(
      //@ts-ignore
      (fn) => {
        const data = fn();
        data.cache.insert("", { name: "color" });

        return [data];
      },
    );

    const { result } = renderHook(customHook);

    expect(result.current).toEqual(expected);
  });
});

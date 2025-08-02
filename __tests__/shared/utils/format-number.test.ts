import { formatNumber } from "@utils/format-number";

describe("formatNumber tests:", () => {
  it("When it is called with 1000, then it returns 1.000", () => {
    expect(formatNumber(1000)).toEqual("1.000");
  });

  it("When it is called with 1000000, then it returns 1.000.000", () => {
    expect(formatNumber(1000000)).toEqual("1.000.000");
  });

  it("When it is called with 1, then it returns 1", () => {
    expect(formatNumber(1)).toEqual("1");
  });
});

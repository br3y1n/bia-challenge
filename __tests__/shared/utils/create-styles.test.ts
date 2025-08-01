import { createStyles } from "@utils/create-styles";

describe("createStyles tests:", () => {
  it("when it is called with an obj, then it returns the same obj", () => {
    const obj = { key: {} };

    expect(createStyles(obj)).toEqual(obj);
  });
});

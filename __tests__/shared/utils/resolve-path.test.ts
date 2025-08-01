import { configEnvs } from "@constants/config-envs.const";
import { resolvePath } from "@utils/resolve-path";

vi.mock("@constants/config-envs.const");

describe("resolvePath tests:", () => {
  describe("when BASE_PATH is not set", () => {
    beforeEach(() => {
      vi.mocked(configEnvs).BASE_PATH = "";
    });
    it("should return the same path when it starts with /", () => {
      expect(resolvePath("/test")).toEqual("/test");
    });

    it("should return the same path when it doesn't start with /", () => {
      expect(resolvePath("test")).toEqual("test");
      expect(resolvePath("./test")).toEqual("./test");
      expect(resolvePath("../test")).toEqual("../test");
    });
  });

  describe("when BASE_PATH is set", () => {
    const BASE_PATH = "/base";

    beforeEach(() => {
      vi.mocked(configEnvs).BASE_PATH = BASE_PATH;
    });

    it("should prepend BASE_PATH to absolute paths", () => {
      expect(resolvePath("/test")).toEqual(`${BASE_PATH}/test`);
      expect(resolvePath("/another/path")).toEqual(`${BASE_PATH}/another/path`);
    });

    it("should not modify relative paths", () => {
      expect(resolvePath("test")).toEqual("test");
      expect(resolvePath("./test")).toEqual("./test");
      expect(resolvePath("../test")).toEqual("../test");
    });

    it("should handle empty path", () => {
      expect(resolvePath("")).toEqual("");
    });
  });
});

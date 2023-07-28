import { IApiCountry } from "@adapters/api/api.interfaces";
import CountryPage from "@app/country/[id]/page";
import { getCountryResponse, render, screen, waitFor } from "@test-utils";
import { act } from "react-dom/test-utils";

describe("CountryPage tests:", () => {
  let apiResponse: IApiCountry;

  beforeEach(() => {
    apiResponse = getCountryResponse();

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(apiResponse),
      }),
    ) as jest.Mock;
  });

  it("When it is rendered, then 1 img, title and borders button are rendered", async () => {
    act(() => {
      render(<CountryPage params={{ id: "123" }} />);
    });

    await waitFor(() => {
      const title = screen.getByRole("heading", { level: 2, name: "colombia" });
      const img = screen.getByAltText("image");
      const borderButton = screen.getByRole("button", {
        name: "colombia",
      });

      expect(title).toBeInTheDocument();
      expect(img).toBeInTheDocument();
      expect(borderButton).toBeInTheDocument();
    });
  });

  it("When it is rendered and fecth fail, then country no found text is rendered", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      }),
    ) as jest.Mock;

    act(() => {
      render(<CountryPage params={{ id: "123" }} />);
    });

    await waitFor(() => {
      const text = screen.getByText("Country no found...");

      expect(text).toBeInTheDocument();
    });
  });

  it("When dont have border, then no borders text is rendered", async () => {
    apiResponse.borders = [];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(apiResponse),
      }),
    ) as jest.Mock;

    act(() => {
      render(<CountryPage params={{ id: "123" }} />);
    });

    await waitFor(() => {
      const text = screen.getByText("No borders...");

      expect(text).toBeInTheDocument();
    });
  });
});

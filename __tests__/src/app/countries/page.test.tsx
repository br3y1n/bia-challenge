import { IApiCountry } from "@adapters/api/api.interfaces";
import CountriesPage from "@app/countries/page";
import {
  getCountryResponse,
  render,
  screen,
  userEvent,
  waitFor,
} from "@test-utils";
import { act } from "react-dom/test-utils";

describe("CountriesPage tests:", () => {
  let apiResponse: IApiCountry;

  beforeEach(() => {
    apiResponse = getCountryResponse();

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([apiResponse]),
      }),
    ) as jest.Mock;
  });

  it("When it is rendered, then 2 inputs and 1 card is rendered", async () => {
    act(() => {
      render(<CountriesPage />);
    });

    await waitFor(() => {
      const img = screen.getAllByAltText("image");
      const inputCountry = screen.getByLabelText(/Search for a country.../i);
      const inputRegion = screen.getByLabelText(/Filter by Region/i);

      expect(inputRegion).toBeInTheDocument();
      expect(inputCountry).toBeInTheDocument();
      expect(img).toHaveLength(1);
    });
  });

  it("When there are 9 countries and pagination is clicked, then only show 8 countries and then 1 country", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            apiResponse,
            apiResponse,
            apiResponse,
            apiResponse,
            apiResponse,
            apiResponse,
            apiResponse,
            apiResponse,
            apiResponse,
          ]),
      }),
    ) as jest.Mock;

    act(() => {
      render(<CountriesPage />);
    });

    await waitFor(() => {
      const img = screen.getAllByAltText("image");

      expect(img).toHaveLength(8);
    });

    const paginationButton = screen.getByRole("button", {
      name: "Go to page 2",
    });

    await userEvent.click(paginationButton);

    const img = screen.getAllByAltText("image");

    expect(img).toHaveLength(1);
  });

  it("when interacting with the 2 filters, then filters are applied to the search", async () => {
    const otherCountry = getCountryResponse();
    otherCountry.region = "Europe";

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            otherCountry,
            apiResponse,
            apiResponse,
            apiResponse,
            apiResponse,
            apiResponse,
            apiResponse,
            apiResponse,
            apiResponse,
          ]),
      }),
    ) as jest.Mock;

    act(() => {
      render(<CountriesPage />);
    });

    await waitFor(() => {
      const img = screen.getAllByAltText("image");

      expect(img).toHaveLength(8);
    });

    const inputCountry = screen.getByLabelText(/Search for a country.../i);
    const inputName = screen.getByLabelText(/Filter by Region/i);

    await userEvent.type(inputCountry, "col");
    await userEvent.click(inputName);

    const options = screen.getByText(/Europe/i);
    await userEvent.click(options);

    await waitFor(() => {
      const img = screen.getAllByAltText("image");

      expect(img).toHaveLength(1);
    });
  });

  it("when countries are empty, then no matches text is rendered", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      }),
    ) as jest.Mock;

    act(() => {
      render(<CountriesPage />);
    });

    await waitFor(() => {
      const text = screen.getByText("No matches found...");

      expect(text).toBeInTheDocument();
    });
  });
});

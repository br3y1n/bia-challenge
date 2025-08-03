import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CountriesPage from "@app/countries/page";
import { QueryProvider } from "@providers/QueryProvider";

describe("CountriesPage tests:", () => {
  beforeEach(() => {
    render(
      <QueryProvider>
        <CountriesPage />
      </QueryProvider>,
    );
  });

  it("When it is rendered, then 2 inputs and 8 cards is rendered", async () => {
    await waitFor(() => {
      const cards = screen.getAllByText(/population/i);
      const [inputCountry] = screen.getAllByText(/Search for a country.../i);
      const [inputRegion] = screen.getAllByText(/Filter by Region/i);

      expect(cards).toHaveLength(8);
      expect(inputRegion).toBeTruthy();
      expect(inputCountry).toBeTruthy();
    });
  });

  it("When there are 20 countries and pagination 3 is clicked, then only show 8 countries (page 1) and then 4 countries (page 3)", async () => {
    await waitFor(() => {
      const cards = screen.getAllByText(/population/i);

      expect(cards).toHaveLength(8);
    });

    const paginationButton = screen.getByRole("button", {
      name: "Go to page 3",
    });

    await userEvent.click(paginationButton);

    await waitFor(() => {
      const cards = screen.getAllByText(/population/i);

      expect(cards).toHaveLength(4);
    });
  });

  it("when interacting with the 2 filters, then filters are applied to the search", async () => {
    await waitFor(() => {
      const cards = screen.getAllByText(/population/i);

      expect(cards).toHaveLength(8);
    });

    const inputCountry = screen.getByRole("textbox");
    const inputRegion = screen.getByRole("combobox");

    await userEvent.click(inputCountry);
    await userEvent.keyboard("moldova");
    await userEvent.click(inputRegion);

    const option = screen.getByRole("option", { name: /Europe/i });
    await userEvent.click(option);

    await waitFor(() => {
      const cards = screen.getAllByText(/population/i);

      expect(cards).toHaveLength(1);
    });
  });

  it("when countries are empty, then no matches text is rendered", async () => {
    const inputCountry = screen.getByRole("textbox");

    await userEvent.type(inputCountry, "xxxxx");

    await waitFor(
      () => {
        const text = screen.getByText(/No matches found.../i);

        expect(text).toBeTruthy();
      },
      {
        timeout: 2000,
      },
    );
  });
});

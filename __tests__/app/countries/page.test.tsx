import { render, screen } from "@testing-library/react";

import CountriesPage from "@app/countries/page";
import { QueryProvider } from "@providers/QueryProvider";

describe("CountriesPage tests:", () => {
  it("When XXX, then XXX", () => {
    render(
      <QueryProvider>
        <CountriesPage />
      </QueryProvider>,
    );

    const [title] = screen.getAllByText(/search for a country/i);

    expect(title).toBeTruthy();
  });
});

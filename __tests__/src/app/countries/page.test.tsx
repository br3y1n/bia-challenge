import CountriesPage from "@app/countries/page";
import { render, screen } from "@test-utils";

describe("CountriesPage tests:", () => {
  it("When XXX, then XXX", () => {
    render(<CountriesPage />);

    const title = screen.getByText("Countries");

    expect(title).toBeInTheDocument();
  });
});

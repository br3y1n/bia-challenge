import CountryPage from "@app/country/[id]/page";
import { render, screen } from "@test-utils";

describe("CountryPage tests:", () => {
  it("When XXX, then XXX", () => {
    render(<CountryPage />);

    const title = screen.getByText("Country");

    expect(title).toBeInTheDocument();
  });
});

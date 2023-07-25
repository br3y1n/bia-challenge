import Home from "@app/page";
import { render, screen } from "@test-utils";

describe("Home tests:", () => {
  it("should be render home page", () => {
    render(<Home />);
    const title = screen.getByText("Bia challenge");

    expect(title).toBeInTheDocument();
  });
});

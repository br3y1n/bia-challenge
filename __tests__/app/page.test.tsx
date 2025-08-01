import { render, screen } from "@testing-library/react";

import Home from "@app/page";

describe("Home Page tests:", () => {
  it("renders a title", () => {
    render(<Home />);
    const title = screen.getByText("Bia Challenge");

    expect(title).toBeTruthy();
  });
});

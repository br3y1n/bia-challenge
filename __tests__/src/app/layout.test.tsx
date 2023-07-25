import RootLayout from "@app/layout";
import { render, screen } from "@testing-library/react";

describe("RootLayout tests:", () => {
  it("should be render an children", () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    render(
      <RootLayout>
        <h1>Children</h1>
      </RootLayout>,
    );

    const children = screen.getByText("Children");

    expect(children).toBeInTheDocument();
  });
});

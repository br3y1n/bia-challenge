import RootLayout from "@app/layout";
import { render, screen } from "@testing-library/react";

describe("RootLayout tests:", () => {
  it("should be render 1 header and 1 children inside a main tag", () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    render(
      <RootLayout>
        <h1>Children</h1>
      </RootLayout>,
    );

    const children = screen.getByText("Children");
    const header = screen.getByText("Where in the world?");
    const main = screen.getByRole("main");

    expect(children).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
  });
});

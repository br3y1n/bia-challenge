import { render, screen } from "@testing-library/react";

import RootLayout from "@app/layout";

describe("RootLayout tests:", () => {
  it("renders children inside the layout", () => {
    render(
      <RootLayout>
        <div data-testid="test-child">Test Child</div>
      </RootLayout>,
    );

    const header = screen.getByText("Where in the world?");
    const main = screen.getByRole("main");
    const child = screen.queryByTestId("test-child");

    expect(header).toBeTruthy();
    expect(main).toBeTruthy();
    expect(child).toBeTruthy();
    expect(child?.textContent).toBe("Test Child");
  });
});

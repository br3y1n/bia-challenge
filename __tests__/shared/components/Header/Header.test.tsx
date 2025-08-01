import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Header } from "@components/Header";

describe("Header tests:", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("when it is rendered, then title and button are rendered", () => {
    const headerTitle = screen.getByText("Where in the world?");
    const button = screen.getByRole("button", { name: "Dark Mode" });

    expect(headerTitle).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("when button is clicked, then button text change to light mode", async () => {
    const button = screen.getByRole("button", { name: "Dark Mode" });

    await userEvent.click(button);

    expect(button.textContent).toEqual("Light Mode");
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ModeButton } from "@components/ModeButton";

describe("ModeButton tests:", () => {
  let button: HTMLElement;

  beforeEach(() => {
    render(<ModeButton />);

    button = screen.getByRole("button");
  });

  it("when it is rendered, then a button is rendered with Dark Mode text", () => {
    expect(button).toBeTruthy();
    expect(button.textContent).toEqual("Dark Mode");
  });

  it("when button is clicked, then a button is rendered with Light Mode text", async () => {
    await userEvent.click(button);

    expect(button).toBeTruthy();
    expect(button.textContent).toEqual("Light Mode");
  });
});

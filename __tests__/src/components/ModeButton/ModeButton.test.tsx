import ModeButton from "@components/ModeButton/ModeButton";
import { render, screen, userEvent } from "@test-utils";

describe("ModeButton tests:", () => {
  let button: HTMLElement;

  beforeEach(() => {
    render(<ModeButton />);

    button = screen.getByRole("button");
  });

  it("when it is rendered, then a button is rendered with Dark Mode text", () => {
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Dark Mode");
  });

  it("when button is clicked, then a button is rendered with Light Mode text", async () => {
    await userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Light Mode");
  });
});

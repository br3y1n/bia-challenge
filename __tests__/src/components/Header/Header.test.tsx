import Header from "@components/Header/Header";
import { render, screen, userEvent } from "@test-utils";

describe("Header tests:", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("when it is rendered, then title and button are rendered", () => {
    const headerTitle = screen.getByText("Where in the world?");
    const button = screen.getByRole("button", { name: "Dark Mode" });

    expect(headerTitle).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("when button is clicked, then button text change to light mode", async () => {
    const button = screen.getByRole("button", { name: "Dark Mode" });

    await userEvent.click(button);

    expect(button).toHaveTextContent("Light Mode");
  });
});

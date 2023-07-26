import Home from "@app/page";
import { render, screen } from "@test-utils";
import { HtmlProps } from "next/dist/shared/lib/html-context";

jest.mock(
  "next/image",
  () =>
    ({ priority, ...props }: HtmlProps & { priority: boolean }) => (
      <img {...props} />
    ),
);

describe("Home tests:", () => {
  it("should be render home page", () => {
    render(<Home />);

    const titleTxt = screen.getByRole("heading", {
      level: 2,
      name: /welcome/i,
    });

    const image = screen.getByAltText("Brayayin");
    const descriptionTxt = screen.getByText(/Hello everyone/i);
    const button = screen.getByRole("button", { name: "Continue" });

    expect(titleTxt).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(descriptionTxt).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

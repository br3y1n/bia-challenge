import ThemeRegistry from "@components/ThemeRegistry/ThemeRegistry";
import { render, screen } from "@test-utils";

describe("ThemeRegistry tests:", () => {
  it("should be render a children", () => {
    render(
      <ThemeRegistry options={{ key: "mui" }}>
        <h1>Children</h1>
      </ThemeRegistry>,
    );
    const title = screen.getByText("Children");

    expect(title).toBeInTheDocument();
  });
});

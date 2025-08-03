import { render, screen, waitFor } from "@testing-library/react";
import { useParams } from "next/navigation";

import CountryPage from "@app/countries/[id]/page";
import { QueryProvider } from "@providers/QueryProvider";

describe("CountryPage tests:", () => {
  const renderComponent = () => {
    render(
      <QueryProvider>
        <CountryPage />
      </QueryProvider>,
    );
  };

  it("When it is rendered, then 1 img, title and borders button are rendered", async () => {
    vi.mocked(useParams).mockReturnValue({ id: "MDA" });
    renderComponent();

    await waitFor(() => {
      const title = screen.getByRole("heading", { level: 2, name: "Moldova" });
      const img = screen.getByAltText(
        "The flag of Moldova is composed of three equal vertical bands of blue, yellow and red, with the national coat of arms centered in the yellow band.",
      );
      const borderButton = screen.getByRole("button", {
        name: "Ukraine",
      });

      expect(title).toBeTruthy();
      expect(img).toBeTruthy();
      expect(borderButton).toBeTruthy();
    });
  });

  it("When it is rendered and fecth fail, then country no found text is rendered", async () => {
    vi.mocked(useParams).mockReturnValue({ id: "XXX" });
    renderComponent();

    await waitFor(
      () => {
        const text = screen.getByText(/oops!/i);

        expect(text).toBeTruthy();
      },
      { timeout: 5000 },
    );
  });

  it("When dont have border, then no borders text is rendered", async () => {
    vi.mocked(useParams).mockReturnValue({ id: "MYS" });
    renderComponent();

    await waitFor(() => {
      const text = screen.getByText("No borders...");

      expect(text).toBeTruthy();
    });
  });
});

import { render } from "@testing-library/react";

import CountryPage from "@app/countries/[id]/page";
import { QueryProvider } from "@providers/QueryProvider";

describe("CountryPage tests:", () => {
  it("When XXX, then XXX", () => {
    render(
      <QueryProvider>
        <CountryPage />
      </QueryProvider>,
    );

    // const title = screen.getByText("load...");
    //
    // expect(title).toBeTruthy();
  });
});

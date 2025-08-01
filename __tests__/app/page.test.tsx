import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "@app/page";
import { InternalRouteEnum } from "@enums/internal-route.enum";
import { pushMock } from "__tests__/setup";

describe("Home Page tests:", () => {
  it("should be render home page", () => {
    render(<Home />);

    const titleTxt = screen.getByRole("heading", {
      level: 2,
      name: /welcome/i,
    });

    const image = screen.getByAltText("Brayayin");
    const descriptionTxt = screen.getByText(/Hello everyone/i);
    const button = screen.getByRole("button", { name: "Continue" });

    expect(titleTxt).toBeTruthy();
    expect(image).toBeTruthy();
    expect(descriptionTxt).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("When  button is clicked, then router.push is called with countries route", async () => {
    render(<Home />);

    const [button] = screen.getAllByRole("button");

    await userEvent.click(button);

    expect(pushMock).toBeCalledWith(InternalRouteEnum.COUNTRIES);
  });
});

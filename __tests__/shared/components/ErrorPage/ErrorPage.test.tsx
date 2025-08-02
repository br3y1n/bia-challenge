import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ErrorPage } from "@components/ErrorPage";
import { pushMock } from "__tests__/setup";

describe("ErrorPage tests:", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("When it's called, then default error is rendered", () => {
    render(<ErrorPage />);

    const title = screen.getByText(/oops/i);

    expect(title).toBeTruthy();
  });

  it(`when the return button is clicked, then pushMock is called`, async () => {
    render(<ErrorPage />);

    const button = screen.getByRole("button");

    await userEvent.click(button);

    expect(pushMock).toBeCalled();
  });
});

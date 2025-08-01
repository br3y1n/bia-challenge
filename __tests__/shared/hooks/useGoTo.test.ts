import { renderHook } from "@testing-library/react";

import { InternalRouteEnum } from "@enums/internal-route.enum";
import { useGoTo } from "@hooks/useGoTo";

const pushMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
}));

describe("useGoTo tests:", () => {
  beforeEach(() => {
    pushMock.mockReset();
  });

  it("When goToHome is called, then push is called with home route ", () => {
    const { result } = renderHook(useGoTo);

    result.current.goToHome();

    expect(pushMock).toBeCalledWith(InternalRouteEnum.HOME);
  });

  it("When goToCountries is called, then push is called with countries route ", () => {
    const { result } = renderHook(useGoTo);

    result.current.goToCountries();

    expect(pushMock).toBeCalledWith(InternalRouteEnum.COUNTRIES);
  });
});

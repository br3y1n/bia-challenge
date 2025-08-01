"use client";

import { useRouter } from "next/navigation";

import { InternalRouteEnum } from "@enums/internal-route.enum";

const useGoTo = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push(InternalRouteEnum.HOME);
  };

  const goToCountries = () => {
    router.push(InternalRouteEnum.COUNTRIES);
  };

  return {
    goToCountries,
    goToHome,
  };
};

export { useGoTo };

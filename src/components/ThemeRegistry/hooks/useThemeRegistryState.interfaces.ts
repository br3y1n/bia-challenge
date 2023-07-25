import { EmotionCache } from "@emotion/react/macro";
import { ReactNode } from "react";

interface IUseThemeRegistryState {
  children: ReactNode;
  cache: EmotionCache;
}

export default IUseThemeRegistryState;

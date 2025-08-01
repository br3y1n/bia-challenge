"use client";

import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

import { mainStyles } from "./Main.style";

const Main = ({ children }: PropsWithChildren) => (
  <Box component="main" sx={mainStyles.container}>
    {children}
  </Box>
);

export { Main };

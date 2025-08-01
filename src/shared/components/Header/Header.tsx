"use client";
import { Box, Typography } from "@mui/material";

import { ModeButton } from "@components/ModeButton";

import { headerStyles } from "./Header.style";

const title = "Where in the world?";

const Header = () => (
  <Box component="header" sx={headerStyles.container}>
    <Typography variant="h1">{title}</Typography>

    <ModeButton />
  </Box>
);

export { Header };

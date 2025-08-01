"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

import { ModeButton } from "@components/ModeButton";
import { InternalRouteEnum } from "@enums/internal-route.enum";

import { headerStyles } from "./Header.style";

const title = "Where in the world?";

const Header = () => (
  <Box component="header" sx={headerStyles.container}>
    <nav>
      <Box
        component={Link}
        href={InternalRouteEnum.HOME}
        sx={headerStyles.title}
      >
        <Typography variant="h1">{title}</Typography>
      </Box>
    </nav>

    <ModeButton />
  </Box>
);

export { Header };

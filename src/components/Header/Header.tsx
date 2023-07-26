"use client";
import ModeButton from "@components/ModeButton/ModeButton";
import { RouteEnum } from "@enums";
import { Typography, styled } from "@mui/material";
import Link from "next/link";
import headerStyles from "./Header.styles";

const title = "Where in the world?";

const HeaderStyled = styled("header")({});
const LinkStyled = styled(Link)({});

const Header = () => (
  <HeaderStyled sx={headerStyles.container}>
    <nav>
      <LinkStyled href={RouteEnum.HOME} sx={headerStyles.title}>
        <Typography variant="h1">{title}</Typography>
      </LinkStyled>
    </nav>

    <ModeButton />
  </HeaderStyled>
);

export default Header;

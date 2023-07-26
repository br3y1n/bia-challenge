"use client";
import ModeButton from "@components/ModeButton/ModeButton";
import { Typography, styled } from "@mui/material";
import headerStyles from "./Header.styles";

const HeaderStyled = styled("header")({});
const title = "Where in the world?";

const Header = () => (
  <HeaderStyled sx={headerStyles.container}>
    <Typography variant="h1">{title}</Typography>

    <ModeButton />
  </HeaderStyled>
);

export default Header;

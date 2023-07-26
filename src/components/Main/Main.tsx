"use client";
import { styled } from "@mui/material";
import IMainProps from "./Main.interfaces";
import mainStyles from "./Main.styles";

const MainStyled = styled("main")({});

const Main = ({ children }: IMainProps) => (
  <MainStyled sx={mainStyles.container}>{children}</MainStyled>
);

export default Main;

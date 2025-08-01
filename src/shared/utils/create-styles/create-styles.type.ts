import { SxProps, Theme } from "@mui/material";

interface ICreateStyles {
  <T extends Record<string, SxProps<Theme>>>(obj: T): T;
}

export default ICreateStyles;

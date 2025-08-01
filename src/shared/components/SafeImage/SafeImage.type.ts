import { SxProps, Theme } from "@mui/material";
import { ImgHTMLAttributes } from "react";

type SafeImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src?: string;
  sx?: SxProps<Theme>;
};

export type { SafeImageProps };

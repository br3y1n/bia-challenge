import { Box } from "@mui/material";

import { resolvePath } from "@utils/resolve-path";

import { safeImageStyles } from "./SafeImage.style";
import { SafeImageProps } from "./SafeImage.type";

const SafeImage = ({
  src,
  alt,
  onError,
  sx,
  ...otherProps
}: SafeImageProps) => {
  const fallback = "/images/no-image.png";
  const resolvedSrc = resolvePath(src || fallback);
  const resolvedFallback = resolvePath(fallback);

  const isSrcValid = !!src;
  return (
    <Box
      component="img"
      src={resolvedSrc}
      onError={(e) => {
        e.currentTarget.src = resolvedFallback;
        e.currentTarget.style.objectFit = "cover";
        onError?.(e);
      }}
      alt={alt}
      sx={{
        ...(isSrcValid ? safeImageStyles.img : safeImageStyles.imgFallback),
        ...sx,
      }}
      {...otherProps}
    />
  );
};

export { SafeImage };

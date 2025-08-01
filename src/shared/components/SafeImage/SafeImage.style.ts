import { createStyles } from "@utils/create-styles";

const safeImageStyles = createStyles({
  imgFallback: {
    objectFit: "cover",
  },
  img: {
    objectFit: "contain",
  },
});

export { safeImageStyles };

import { createStyles } from "@utils";

const mainStyles = createStyles({
  container: {
    p: "50px 80px",
    backgroundColor: ({ palette }) => palette.background.paper,
    minHeight: "calc(100% - 80px)",
  },
});

export default mainStyles;

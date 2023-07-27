import { createStyles } from "@utils";

const mainStyles = createStyles({
  container: {
    p: { xs: "30px", md: "40px 80px" },
    backgroundColor: ({ palette }) => palette.background.paper,
    minHeight: "calc(100% - 80px)",
  },
});

export default mainStyles;

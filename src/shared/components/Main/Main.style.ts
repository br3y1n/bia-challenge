import { createStyles } from "@utils/create-styles";

const mainStyles = createStyles({
  container: {
    p: { xs: "30px", md: "40px 80px" },
    backgroundColor: ({ palette }) => palette.background.paper,
    minHeight: "calc(100% - 80px)",
  },
});

export { mainStyles };

import { createStyles } from "@utils/create-styles";

const headerStyles = createStyles({
  container: {
    height: "80px",
    backgroundColor: ({ palette }) => palette.background.default,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: { xs: "10px", md: "80px" },
    top: 0,
    position: "sticky",
    boxShadow: "0px 2px 6px #00000033",
    zIndex: 9999,
  },
  title: {
    textDecoration: "none",
  },
});

export { headerStyles };

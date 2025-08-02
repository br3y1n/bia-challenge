import { Box } from "@mui/material";

import { loaderStyles } from "./Loader.style";

const text = "Loading...";

const Loader = () => (
  <Box sx={loaderStyles.container}>
    <Box component={"span"} sx={loaderStyles.spinner} />
    <Box component={"p"} sx={loaderStyles.text}>
      {text}
    </Box>
  </Box>
);

export { Loader };

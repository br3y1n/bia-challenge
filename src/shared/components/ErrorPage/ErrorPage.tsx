import { Box, Button } from "@mui/material";

import { useGoTo } from "@hooks/useGoTo";

import { errorPageStyles } from "./ErrorPage.style";

const text = "Oops! Something went wrong.";
const description = "Hit reload or click the button to go back home.";
const buttonText = "Go home";

const ErrorPage = () => {
  const { goToHome } = useGoTo();

  return (
    <Box component={"main"} sx={errorPageStyles.container}>
      <Box component={"h1"} sx={errorPageStyles.title}>
        {text}
      </Box>
      <p>{description}</p>

      <Button variant="outlined" onClick={goToHome}>
        {buttonText}
      </Button>
    </Box>
  );
};

export { ErrorPage };

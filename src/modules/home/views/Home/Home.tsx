"use client";
import { Box, Button, Typography } from "@mui/material";

import { SafeImage } from "@components/SafeImage";
import { useGoTo } from "@hooks/useGoTo";

import { homeStyles } from "./Home.style";

const title = "Welcome to my Bia Challenge!";

const description =
  "Hello everyone! My name is Brayan Arango, and I am delighted to present to you my development for the Bia challenge. On this occasion, I am aspiring to the role of a Frontend Developer, and I am thrilled to share with you what I have created.";

const buttonText = "Continue";

const Home = () => {
  const { goToCountries } = useGoTo();

  return (
    <Box sx={homeStyles.container}>
      <Typography variant="h2" sx={homeStyles.title}>
        {title}
      </Typography>

      <SafeImage
        src="/images/brayayin.webp"
        width={448}
        height={400}
        alt="Brayayin"
        sx={homeStyles.image}
      />

      <Typography variant="body1" sx={homeStyles.description}>
        {description}
      </Typography>

      <Button variant="outlined" sx={homeStyles.button} onClick={goToCountries}>
        {buttonText}
      </Button>
    </Box>
  );
};

export { Home };

"use client";
import { RouteEnum } from "@enums";
import { Box, Button, Typography, styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import homeStyles from "./page.styles";

const title = "Welcome to my Bia Challenge!";

const description =
  "Hello everyone! My name is Brayan Arango, and I am delighted to present to you my development for the Bia challenge. On this occasion, I am aspiring to the role of a Frontend Developer, and I am thrilled to share with you what I have created.";

const buttonText = "Continue";

const ImageStyled = styled(Image)({});

const Home = () => (
  <Box sx={homeStyles.container}>
    <Typography variant="h2" sx={homeStyles.title}>
      {title}
    </Typography>

    <ImageStyled
      src="/images/brayayin.webp"
      width={448}
      height={400}
      alt="Brayayin"
      priority
      sx={homeStyles.image}
    />

    <Typography variant="body1" sx={homeStyles.description}>
      {description}
    </Typography>

    <Link href={RouteEnum.COUNTRIES} legacyBehavior>
      <Button variant="outlined" sx={homeStyles.button}>
        {buttonText}
      </Button>
    </Link>
  </Box>
);

export default Home;

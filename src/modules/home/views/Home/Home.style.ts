import { keyframes } from "@emotion/react";

import { createStyles } from "@utils/create-styles";

const myKeyframe = keyframes`
    0%  { transform:    rotate(0deg)  }
    25% { transform:    rotate(3deg)  }
    50% { transform:    rotate(0deg)  }
    75% { transform:    rotate(-3deg) }
    100% { transform:   rotate(0deg)  }
`;

const homeStyles = createStyles({
  container: {
    width: "100%",
    maxWidth: "700px",
    mx: "auto",
  },
  title: {
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    my: "20px",
  },
  button: {
    display: "block",
    m: "20px auto",
  },
  image: {
    display: "block",
    m: "20px auto",
    animation: `${myKeyframe} 2s infinite linear`,
    width: { xs: "70%", sm: "50%", md: "100%" },
    height: "auto",
    maxWidth: "448px",
  },
});

export { homeStyles };

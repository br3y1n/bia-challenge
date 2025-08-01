import { Button } from "@mui/material";

import { ErrorPageProps } from "./ErrorPage.type";

const text = "Oops! Something went wrong.";

const ErrorPage = ({ button, description, title }: ErrorPageProps) => {
  return (
    <main>
      <h1>{title || text}</h1>
      {description && <p>{description}</p>}
      {button && <Button onClick={button.onClick}>{button.text}</Button>}
    </main>
  );
};

export { ErrorPage };

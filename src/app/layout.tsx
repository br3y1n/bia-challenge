import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { PropsWithChildren } from "react";

import { Header } from "@components/Header";
import { Main } from "@components/Main";
import { QueryProvider } from "@providers/QueryProvider";
import { ThemeModeProvider } from "@providers/ThemeModeProvider";
import { resolvePath } from "@utils/resolve-path";

import type { Metadata } from "next";

import "@styles/globals.css";

const metadata: Metadata = {
  title: "Bia challenge",
  description: "Frontend-React challenge for Bia by Brayayin",
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <head>
      <link rel="icon" href={resolvePath("/favicon.ico")} sizes="32x32" />
    </head>
    <body>
      <AppRouterCacheProvider>
        <ThemeModeProvider>
          <QueryProvider>
            <Header />
            <Main>{children}</Main>
          </QueryProvider>
        </ThemeModeProvider>
      </AppRouterCacheProvider>
    </body>
  </html>
);

export { RootLayout as default, metadata };

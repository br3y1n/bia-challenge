import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode } from "react";

import { QueryProvider } from "@providers/QueryProvider";
import { resolvePath } from "@utils/resolve-path";

import type { Metadata } from "next";

import "@styles/globals.css";

const metadata: Metadata = {
  title: "Bia challenge",
  description: "Frontend-React challenge for Bia by Brayayin",
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <head>
      <link rel="icon" href={resolvePath("/favicon.ico")} sizes="32x32" />
    </head>
    <body>
      <AppRouterCacheProvider>
        <QueryProvider>{children}</QueryProvider>
      </AppRouterCacheProvider>
    </body>
  </html>
);

export { RootLayout as default, metadata };

import ThemeRegistry from "@components/ThemeRegistry/ThemeRegistry";
import type { Metadata } from "next";
import "./globals.css";

const metadata: Metadata = {
  title: "Bia challenge",
  description: "Frontend-React challenge for Bia by Brayayin",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="es">
    <head>
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
    </head>
    <body>
      <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
    </body>
  </html>
);

export { RootLayout as default, metadata };

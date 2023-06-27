import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio || Sérgio Winkelstroter",
  description: "Desenvolvedor Front-end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/Sergio.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

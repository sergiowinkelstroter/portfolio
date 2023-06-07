import { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: "Portfolio | Sérgio Winkelstroter",
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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
//https://portfolio-winkelstrotersergio.vercel.app/

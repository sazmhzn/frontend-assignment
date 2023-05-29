import "./globals.css";
import {Header} from "../components/Header";
import { Main } from "../components/Main";

import { Inter } from "next/font/google";
import logo from "../public/icon.png";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Music Worlz</title>
        <link rel="shortcut icon" href={"logo"} />

      </head>

      <body>
        <Header />

        <main>
          <Main />
        </main>
    
      </body>
    </html>
  );
}

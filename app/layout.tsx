import "./globals.css";
import {Header} from "../components/Header";
import { Main } from "../components/Main";
import SearchBar from "../components/SearchBar";

import { Inter } from "next/font/google";

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
        <link rel="shortcut icon" href="/icon.png" />

      </head>

      <body>
        <header id="default-sidebar"
        className="w-full h-20 flex items-center justify-between mx-auto"
        aria-label="Sidebar">
          <Header />
          <SearchBar />
          
        </header>

        <main className="mx-8 overflow-y-hidden">
          {children}
        </main>
    
      </body>
    </html>
  );
}

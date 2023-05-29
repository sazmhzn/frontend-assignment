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
        className="fixed top-0 left-0 w-screen h-20 flex items-center"
        aria-label="Sidebar">
          <Header />
          <div className=" flex items-center justify-center h-10 mb-4 rounded">
            <SearchBar />
          </div>
        </header>

        <main>
          <Main />
          {children}
        </main>
    
      </body>
    </html>
  );
}

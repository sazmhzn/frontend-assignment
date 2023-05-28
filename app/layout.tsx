import "./globals.css";
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
        <title>Music Worlz</title>
        <link rel="shortcut icon" href={"logo"} />

      </head>

      <body>
        <div className={inter.className}> {children} </div>
    
      </body>
    </html>
  );
}

// import { Sidebar }  from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Music Worlz</title>
      </head>

      <body>
        <div className={inter.className}> {children} </div>
        <main>
          {/* <Sidebar /> */}
          {/* Center */}

        </main>
        <div> {/* player */} </div>


        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}

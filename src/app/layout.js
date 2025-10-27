import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Street's Aromas",
  description: "A blog created with Next.js with posts and comments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <NavBar/>
       <main style={{padding:"2rem"}}>{children}</main>
      </body>
    </html>
  );
}

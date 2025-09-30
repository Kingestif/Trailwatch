import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/landing/Navbar";
import Footer from "./ui/landing/Footer";

export const metadata: Metadata = {
  title: "Trailwatch",
  description: "Watch any movie trailer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
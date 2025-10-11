import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/landing/Navbar";
import Footer from "./ui/landing/Footer";

export const metadata: Metadata = {
  title: "Trailwatch",
  description: "Watch any movie trailer",
  icons: {
    icon:"/cropfavi22.png"
  }
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
        <div className=" bg-black">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
import dns from "node:dns/promises";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "pixgen web application",
  description: "A web application for generating images using AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`} suppressHydrationWarning>
      <body className={`${outfit.className} px-2`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

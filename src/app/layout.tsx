import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/common/Nav/NavBar";

export const metadata: Metadata = {
  title: "CyberSafeKids",
  description: "Cyber Safe & Younger in School.",
};

import { Prompt } from "next/font/google";
import Footer from "@/components/common/Footer";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-prompt",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={prompt.className}>
      <body className="antialiased h-full  flex flex-col  pt-20 min-h-screen">
        <NavBar />
         <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

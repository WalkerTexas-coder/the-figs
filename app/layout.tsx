import type { Metadata } from "next";
import { Roboto_Slab, Geist_Mono } from "next/font/google";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Figs | Christian Folk Band",
  description: "Failed models turned folk band. Listen to our music, join the journey, and experience nostalgic campfire songs with Bailey + Micah + Friends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSlab.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

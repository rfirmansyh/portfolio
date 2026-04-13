import type { Metadata } from "next";
import { Nunito_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahmad Firmansyah | Software Engineer",
  description: "As Software Engineer he is either a magician or a someone who can turn coffee and late nights into interactive and high-performance apps that make your product running smoothly and your users engaged",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${newsreader.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

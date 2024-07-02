import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naruto Characters",
  description: `Explore the World of Naruto Characters
Dive into the captivating universe of Naruto! Discover detailed profiles, fascinating backstories, and unique abilities of your favorite Naruto characters. Whether you're a long-time fan or new to the series, embark on an exciting journey through the world of ninjas and epic adventures.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Ahmad | Full-Stack Web Developer",
  description:
    "Muhammad Ahmad is a full-stack web developer building modern web experiences with Next.js, React, TypeScript, Node.js, MongoDB, and PostgreSQL.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

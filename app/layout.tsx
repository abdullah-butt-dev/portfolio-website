import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Abdullah | Systems & Full-Stack Engineer",
  description:
    "Portfolio of Abdullah — Systems and Full-Stack engineer specializing in distributed systems, high-throughput pipelines, and minimalist web engineering.",
  keywords: [
    "Systems Engineer",
    "Full-Stack",
    "Distributed Systems",
    "Next.js",
    "TypeScript",
    "Sanity",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="bg-[#08090d] text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}

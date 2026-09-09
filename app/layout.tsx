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
  title: "Abdullah | Full-Stack Developer",
  description:
    "Building full-stack web apps and custom software for local businesses. Next.js, React, PostgreSQL, and Supabase.",
  keywords: [
    "Full-Stack Developer",
    "Web Applications",
    "Custom Business Software",
    "Point of Sale",
    "Next.js",
    "React",
    "PostgreSQL",
    "Supabase",
    "Tailwind CSS",
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

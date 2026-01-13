import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "BlueClerk | Connecting Builders and Contractors in the Housing Industry",
  description: "BlueClerk helps builders and service providers stay organized, reduce mix-ups, and finish jobs faster. Everything - from scheduling to POs to job updates - lives in one simple system everyone can access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cappy | Transcribe and create captions for your videos",
  description: "Transcribe and create captions for your videos.",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-neutral-200`}>
        {children}
      </body>
    </html>
  );
}

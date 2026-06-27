import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Verkoper Property Solutions",
  description:
    "Exclusive Sole Selling & Project Marketing Solutions for Real Estate Developers across Palghar, Vasai, Virar and MMR.",
  keywords: [
    "Real Estate",
    "Project Marketing",
    "Sole Selling",
    "Property Solutions",
    "Developer Sales",
    "Palghar",
    "Vasai",
    "Virar",
  ],
  authors: [{ name: "Verkoper Property Solutions" }],
  openGraph: {
    title: "Verkoper Property Solutions",
    description:
      "Strategic Sales & Marketing Partner for Real Estate Developers.",
    siteName: "Verkoper Property Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
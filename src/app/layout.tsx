import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import GSAPProvider from "@/components/GSAPProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TrustPoint Consulting — Trusted Guidance. Complete Solutions.",
  description:
    "Your all-in-one consulting partner for Immigration, Business, Legal, and Financial Services. Expert guidance for individuals and businesses.",
  keywords: [
    "immigration services",
    "business consulting",
    "notary services",
    "apostille",
    "fingerprinting",
    "insurance",
    "tax preparation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-brand-white text-brand-black">
        <GSAPProvider>{children}</GSAPProvider>
      </body>
    </html>
  );
}

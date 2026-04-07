import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import GSAPProvider from "@/components/GSAPProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TrustPoint Consulting — Trusted Guidance. Complete Solutions.",
  description:
    "Strategic consulting across immigration, business, compliance, and documentation — delivered with precision, confidentiality, and results.",
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
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-body antialiased bg-brand-black text-brand-cream">
        <GSAPProvider>{children}</GSAPProvider>
      </body>
    </html>
  );
}

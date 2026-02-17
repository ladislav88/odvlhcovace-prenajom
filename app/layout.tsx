import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SITE_URL } from "./lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Prenájom odvlhčovačov Trenčín | Požičovňa vysúšačov",
  description: "Prenájom odvlhčovačov a požičovňa vysúšačov v Trenčíne. Sanácia po zaplavení, vysúšanie stavieb, zbavenie sa plesní. Priemyselný odvlhčovač na prenájom.",
  keywords: ["prenájom odvlhčovačov", "požičovňa vysúšačov", "Trenčín", "odvlhčovanie po zatopení", "vysúšanie stavieb", "priemyselný odvlhčovač", "odvlhčovač Trenčín"],
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: SITE_URL,
    siteName: "Prenájom odvlhčovačov Trenčín",
    title: "Prenájom odvlhčovačov Trenčín | Požičovňa vysúšačov",
    description: "Prenájom odvlhčovačov a požičovňa vysúšačov v Trenčíne. Sanácia po zaplavení, vysúšanie stavieb, zbavenie sa plesní. Priemyselný odvlhčovač na prenájom.",
    images: [{ url: "/images/odvlhcovac-prenajom-trencin-hero.webp", width: 1200, height: 630, alt: "Priemyselný odvlhčovač na prenájom v Trenčíne" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prenájom odvlhčovačov Trenčín | Požičovňa vysúšačov",
    description: "Prenájom odvlhčovačov a požičovňa vysúšačov v Trenčíne. Sanácia po zaplavení, vysúšanie stavieb, zbavenie sa plesní.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  category: "services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        <main className="min-h-screen bg-transparent">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
